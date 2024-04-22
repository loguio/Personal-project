package app.off;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public class password {
    private final StringProperty name = new SimpleStringProperty();
    private final StringProperty password = new SimpleStringProperty();

    public password(String nom, String password) {
        this.name.set(nom);
        this.password.set(password);
    }


    public String getName() {
        return name.get();
    }

    public void setName(String nom) {
        this.name.set(nom);
    }

    public StringProperty nameProperty() {
        return name;
    }

    public String getPassword() {
        return password.get();
    }

    public void setPassword(String age) {
        this.password.set(age);
    }

    public StringProperty passwordProperty() {
        return password;
    }
}
