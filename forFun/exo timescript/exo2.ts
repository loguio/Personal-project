class bibiliothèque {
    listLivres: livre[] = [];
    listUser: user[] = [];
    constructor() {
        this.game();
    }
    addBook() {
        let title = prompt("Enter title: ");
        let author = prompt("Enter author: ");
        if (title != null && author != null) {
            this.listLivres.push(new livre(title, author));
        }
    }
    addUser() {
        let Nom = prompt("Enter last name: ");
        let Prenom = prompt("Enter first name: ");
        if (Nom != null && Prenom != null) {
            this.listUser.push(new user(Nom, Prenom));
        }
    }
    addEmprunt(){
        let indexUser = Number(prompt("Enter index of user: "));
        let indexBook = Number(prompt("Enter index of book: "));
        if(indexUser != null && indexBook != null && this.listLivres.length > indexBook && this.listUser.length > indexUser){
            this.listUser[indexUser].emprunter(this.listLivres[indexBook]);
        }
    }
    rendreLivre(){
        let indexUser = Number(prompt("Enter index of user: "));
        let indexBook = Number(prompt("Enter index of book: "));
        if(indexUser != null && indexBook != null && this.listLivres.length > indexBook && this.listUser.length > indexUser){
            this.listUser[indexUser].rendre(this.listLivres[indexBook]);
        }
    }
    afficherLivresDispo(){
        console.log("Liste des livres disponibles :");
        this.listLivres.forEach(element => {
            if(element.dateEmprunt == null){
                console.log(element.Titre + " " + element.Auteur);
            }
        });
    }
    afficherLivresEmpruntes(){
        console.log("Liste des livres empruntés :");
        this.listLivres.forEach(element => {
            if(element.dateEmprunt != null){
                console.log(element.Titre + " " + element.Auteur);
            }
        });
    }
    game() {
        let choice = "0";
        while (choice != "7") {
            console.log("\n")
            console.log("1. Add Book"
                + "\n2. Add User"
                + "\n3. Enregistrer un emprunt"
                + "\n4. Rendre un livre"
                + "\n5. Afficher les livres disponibles a l'emprunt"
                + "\n6. Afficher les livres empruntés");
            let choice = prompt("Enter your choice: ");
            // switch (choice) {
                // case "1":
                if (choice == "1") {
                    this.addBook();
                    
                // case "2":
                } else if (choice == "2") {
                    this.addUser();
                // case "3":
                } else if (choice == "3") {
                    this.addEmprunt();
                // case "4":
                } else if (choice == "4") {
                    this.rendreLivre();
                // case "5":
                } else if (choice == "5") {
                    this.afficherLivresDispo();
                // case "6":
                } else if (choice == "6") {
                    this.afficherLivresEmpruntes();
                
            }
        }
    }
}

class user {
    Nom: string="";
    Prenom: string="";
    constructor(Nom: string, Prenom: string) {
        this.Nom = Nom;
        this.Prenom = Prenom;
    }
    emprunter(livre: livre) {
        if (livre.dateEmprunt == null) {
            livre.dateEmprunt = new Date();
        }
    }
    rendre(livre: livre) {
        if (livre.dateEmprunt != null) {
            livre.dateEmprunt = null;
        }
    }
}

class livre{
    Titre: string="";
    Auteur: string="";
    dateEmprunt: Date|null = null;
    constructor(Titre: string, Auteur: string, dateEmprunt: Date|null=null) {
        this.Titre = Titre;
        this.Auteur = Auteur;
        this.dateEmprunt = dateEmprunt;
    }
}
let bibliotheque = new bibiliothèque();