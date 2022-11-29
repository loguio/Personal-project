class ContactManager{
    contacts: Contact = new Contact("", "", "");
    contactList: Contact[] = [];
    printContact(){
        console.log("Liste de contacts :")
        this.contactList.forEach(element => {
           console.log(element.firstName + " " + element.lastName+ " " + element.phone)
        });
    }
    game(){
        let choice = "0";
        while (choice != "0"){
            console.log("1. Add Contact"
            + "\n2. Print Contact"
            + "\n3. Delete Contact"
            + "\n4. Exit");
            let choice = prompt("Enter your choice: ");
            switch (choice) {
                case "1":
                    this.add();
                case "2":
                    this.printContact();
                case "3":
                    this.deleteContact();
                default:
                    return;            }
        }
        
    }
    deleteContact(){
        let index = Number(prompt("Enter index of contact to delete: "));
        this.contactList.splice(index, 1);
    }
    add(){
        let firstName = prompt("Enter first name: ");
        let lastName = prompt("Enter last name: ");
        let phone = prompt("Enter phone number: ");
        this.contactList.push(new Contact(firstName, lastName, phone));
    }
    constructor(){
        this.game();
    }
}

class Contact{
    firstName: string | null;
    lastName: string | null;
    phone: string |null;
    constructor(firstName: string|null, lastName: string | null, phone: string | null){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}


let ContactManagers = new ContactManager();
