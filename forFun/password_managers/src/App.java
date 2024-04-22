import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class App extends Application {

    private TableView<Personne> tableView;
    private ObservableList<Personne> personnes;

    @Override
    public void start(Stage primaryStage) {
        // Initialisation des données pour le tableau
        personnes = FXCollections.observableArrayList(
                new Personne(1, "Alice", 25),
                new Personne(2, "Bob", 30),
                new Personne(3, "Claire", 28),
                new Personne(4, "David", 22)
        );

        // Création du TableView avec ses colonnes
        tableView = new TableView<>();
        tableView.setItems(personnes);

        TableColumn<Personne, Integer> idCol = new TableColumn<>("ID");
        idCol.setCellValueFactory(cellData -> cellData.getValue().idProperty().asObject());

        TableColumn<Personne, String> nomCol = new TableColumn<>("Nom");
        nomCol.setCellValueFactory(cellData -> cellData.getValue().nomProperty());

        TableColumn<Personne, Integer> ageCol = new TableColumn<>("Age");
        ageCol.setCellValueFactory(cellData -> cellData.getValue().ageProperty().asObject());

        tableView.getColumns().addAll(idCol, nomCol, ageCol);

        // Création des champs de saisie pour le formulaire
        TextField idField = new TextField();
        idField.setPromptText("ID");
        TextField nomField = new TextField();
        nomField.setPromptText("Nom");
        TextField ageField = new TextField();
        ageField.setPromptText("Age");

        // Bouton pour ajouter une ligne au tableau
        Button addButton = new Button("Ajouter");
        addButton.setOnAction(e -> {
            try {
                int id = Integer.parseInt(idField.getText());
                String nom = nomField.getText();
                int age = Integer.parseInt(ageField.getText());

                personnes.add(new Personne(id, nom, age));

                idField.clear();
                nomField.clear();
                ageField.clear();
            } catch (NumberFormatException ex) {
                ex.printStackTrace();
                // Gérer les erreurs de saisie ici
            }
        });
        Button saveButton = new Button("Sauvegarder");

        saveButton.setOnAction( e -> {
            String filePath = "C:\\Users\\MARIU\\OneDrive\\Documents\\Personal-project\\forFun\\password_manager\\db\\test.csv"; // Remplacez par votre chemin de fichier CSV

            CSVWriter.writeToCSV(personnes, filePath);
        });
        // Création du formulaire
        VBox root = new VBox(10);
        root.getChildren().addAll(
                new Label("Ajouter une personne"),
                idField, nomField, ageField, addButton, tableView,saveButton);

        Scene scene = new Scene(root, 400, 400);
        primaryStage.setTitle("Formulaire Ajout Ligne");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
