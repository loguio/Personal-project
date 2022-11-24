package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func main() {
	fileServer := http.FileServer(http.Dir("static/")) //Envoie des fichiers aux serveurs (CSS, sons, images)
	http.Handle("/static/", http.StripPrefix("/static/", fileServer))

	http.HandleFunc("/", handler)              // Handler pour les requêtes HTTP
	http.ListenAndServe("localhost:3000", nil) //lancement du serveur
}

func handler(w http.ResponseWriter, r *http.Request) {
	switch r.URL.Path { //pour chaque URL possible sur le serveur web
	case "/home":
		home(w, r) //lance la fonction Login
	default:
		w.WriteHeader(http.StatusNotFound) // lance l'erreur 404 quand on est sur une URL pas utilisée
		erreur404(w)
	}
}

func erreur404(w http.ResponseWriter) {
	tmpl, err := template.ParseFiles("./templates/404.html") //charge le template
	if err != nil {
		fmt.Fprintf(w, "Erreur 404")
	}
	tmpl.ExecuteTemplate(w, "404", nil) //execute le template
}
