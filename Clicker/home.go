package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func home(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("./templates/home.html", "./templates/header.html") //charge le template
	if err != nil {
		fmt.Fprintf(w, "Erreur 500")
	}
	tmpl.ExecuteTemplate(w, "home", nil) //execute le template
}
