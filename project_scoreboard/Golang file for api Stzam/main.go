package main

import "fmt"

type api struct {
	Games map[string][]map[string]int `json:"response"`
}
type apiCoutGames struct {
	Game_Count map[string]int `json:"response"`
}
type listappName struct {
	List map[string][]map[string]string `json:"applist"`
}
type listappId struct {
	List map[string][]map[string]int `json:"applist"`
}
type Profile struct {
	Profiles map[string][]map[string]string `json:"response"`
}

func main() {
	// steamid := "76561198241795024"
	id := "-1"
	var listid []string
	for id != "1" {
		fmt.Scanln(&id)
		listid = append(listid, id)
	}
	for i := 0; i < len(listid)-1; i++ {
		fmt.Println("\n", GetName(listid[i]), " : ")
		GetOwnedGames(listid[i])

	}
}
