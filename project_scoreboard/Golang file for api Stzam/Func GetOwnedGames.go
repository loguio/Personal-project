package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"sort"
)

func GetOwnedGames(steamid string) {
	fmt.Println("GetOwned game")
	var text apiCoutGames
	var test api
	var games []map[string]int
	var listGameName listappName
	var listGameId listappId
	apiKey := "52591CEF898D6F2189F79D6F4E0222A1"

	resp, err := http.Get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apiKey + "&steamid=" + steamid + "&format=json") // on recupère les données qui sont stockés dans resp
	if err != nil {
		fmt.Println(err) // si il y a une erreur donc erreur
	}
	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	json.Unmarshal(bodyBytes, &text)
	json.Unmarshal(bodyBytes, &test)

	nbGames := text.Game_Count["game_count"]
	games = test.Games["games"]

	////////////////////////////////////////////////////////////////////////////////////////////////////////////

	resp, err = http.Get("https://api.steampowered.com/ISteamApps/GetAppList/v2/") // on recupère les données qui sont stockés dans resp
	if err != nil {
		fmt.Println(err) // si il y a une erreur donc erreur
	}
	defer resp.Body.Close()
	bodyBytes, _ = ioutil.ReadAll(resp.Body)
	json.Unmarshal(bodyBytes, &listGameName)
	json.Unmarshal(bodyBytes, &listGameId)
	var listname []string
	var timePlayedSort []int
	var timePlayed []int
	////////////////////////////////////////////////////////////////////////////////////////////////

	for i := 0; i < nbGames; i++ {
		if games[i]["playtime_forever"] >= 120 {
			timePlayedSort = append(timePlayedSort, games[i]["playtime_forever"])
		}
	}
	sort.Sort(sort.Reverse(sort.IntSlice(timePlayedSort)))

	for i := 0; i < len(games); i++ {
		name := ""
		find := false
		for j := 0; j < len(listGameName.List["apps"]); j++ {
			if games[i]["appid"] == listGameId.List["apps"][j]["appid"] && games[i]["playtime_forever"] > 120 {
				name = listGameName.List["apps"][j]["name"]
				find = true
				timePlayed = append(timePlayed, games[i]["playtime_forever"])
				break
			}
		}
		if find {
			listname = append(listname, name)
		}
	}
	for i := 0; i < 10; i++ {
		for j := 0; j < len(timePlayed); j++ {
			if timePlayedSort[i] == timePlayed[j] {
				fmt.Println(listname[j], ":", timePlayedSort[i]/60, "heures et ", timePlayedSort[i]%60, "minute")

			}
		}
	}
}
