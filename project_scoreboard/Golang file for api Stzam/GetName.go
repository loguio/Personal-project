package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func GetName(id string) string {
	var name string
	var text Profile
	apiKey := "52591CEF898D6F2189F79D6F4E0222A1"
	resp, err := http.Get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + apiKey + "&steamids=" + id) // on recupère les données qui sont stockés dans resp
	if err != nil {
		fmt.Println(err) // si il y a une erreur donc erreur
	}
	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	json.Unmarshal(bodyBytes, &text)
	name = text.Profiles["players"][0]["personaname"]
	return name
}
