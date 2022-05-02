package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

type Article struct {
	Title   string `json:"Titles"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
	Id      int    `json:"id"`
}

var Articles []Article

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the HomePage!")
	// fmt.Println("Endpoint Hit: homePage")
}
func returnAllArticles(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint Hit: returnAllArticles")
	json.NewEncoder(w).Encode(Articles)
}
func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/articles", returnAllArticles)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func main() {
	Articles = []Article{
		Article{Title: "Hello", Desc: "Article Description", Content: "Article Content", Id: 1},
		Article{Title: "Hello 2", Desc: "Article Description", Content: "Article Content"},
	}

	for i := 1; i <= 10; i++ {
		Articles = append(Articles, Article{Title: "Hello " + strconv.Itoa(i), Desc: "Article Description", Content: "Article Content", Id: i})
	}
	handleRequests()
}
