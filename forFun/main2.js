class contact {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    display() {
        console.log(`${this.firstName} ${this.lastName} ${this.phone}`);
    }
}


contact1 = new contact("John", "Doe", "0612345678");
contact2 = new contact("Jane", "Doe", "0612345679");
contact3 = new contact("flav", "cormuros", "0612345670");
contact4 = new contact("julios", "outinos", "0612345671");

tabContact = [contact1, contact2, contact3, contact4];
tabContact.forEach(element => {
    element.display();
    document.getElementById("body").innerHTML += "<br>" + element.firstName + " " + element.lastName + " " + element.phone;
});

let el = document.getElementById("myBtn")
if (el) {
    el.addEventListener("click", () => {
        let nom = document.getElementById("firstName").value;
        let prenom = document.getElementById("lastName").value;
        let numero = document.getElementById("phone").value;
        let contact1 = new contact(nom, prenom, numero);
        contact1.display();
        document.getElementById("body").innerHTML += "<br>" + contact1.firstName + " " + contact1.lastName + " " + contact1.phone;
    });
}