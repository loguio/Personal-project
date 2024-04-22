package app.off;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;

import com.opencsv.exceptions.CsvException;

import javafx.application.Application;
import javafx.collections.ObservableList;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TablePosition;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;



public class App extends Application {

    private TableView<password> tableView;
    private ObservableList<password> password;

    @Override
    public void start(Stage primaryStage) throws CsvException {
        // Initialisation des données pour le tableau
        ObservableList<password> password = CSVReaderClass.reader();

        // Création du TableView avec ses colonnes
        tableView = new TableView<>();
        tableView.setItems(password);


        TableColumn<password, String> nomCol = new TableColumn<>("Nom");
        nomCol.setCellValueFactory(cellData -> cellData.getValue().nameProperty());

        TableColumn<password, String> ageCol = new TableColumn<>("mot de passe");
        ageCol.setCellValueFactory(cellData ->new javafx.beans.property.SimpleStringProperty("******"));
        // ageCol.setCellValueFactory(cellData -> cellData.getValue().passwordProperty());

        TableColumn<password, Void> actionCol = new TableColumn<>("Action");
        actionCol.setCellFactory(param -> new TableCellWithButton(password));

        tableView.getColumns().addAll(nomCol, ageCol, actionCol);

        // Création des champs de saisie pour le formulaire
        TextField nomField = new TextField();
        nomField.setPromptText("Nom");
        TextField ageField = new TextField();
        ageField.setPromptText("mot de passe");

        // Bouton pour ajouter une ligne au tableau
        Button addButton = new Button("Ajouter");
        addButton.setOnAction(e -> {
            String nom = nomField.getText();
            String age = ageField.getText();

            password.add(new password(nom, age));

            nomField.clear();
            ageField.clear();
        });
        Button saveButton = new Button("Sauvegarder");

        saveButton.setOnAction( e -> {
            String filePath = "C:\\Users\\MARIU\\OneDrive\\Documents\\Personal-project\\forFun\\password_manager\\src\\db\\test.csv"; // Remplacez par votre chemin de fichier CSV

            CSVWriter.writeToCSV(password, filePath);
        });
        // Création du formulaire
        VBox root = new VBox(10);
        root.getChildren().add(tableView);

        Scene scene = new Scene(root, 400, 400);
        primaryStage.setTitle("Password Manager");
        primaryStage.setScene(scene);
        primaryStage.show();
      
        scene.setOnKeyPressed(event -> {
            switch (event.getCode()) {
                case UP:
                    tableView.getSelectionModel().selectAboveCell();
                    break;
                case DOWN:
                    tableView.getSelectionModel().selectBelowCell();
                    break;
                case ENTER:
                    StringSelection selection = new StringSelection(tableView.getSelectionModel().getSelectedItem().getPassword());

                    // Obtention de l'instance du presse-papiers
                    Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();

                    // Mettre la sélection dans le presse-papiers
                    clipboard.setContents(selection, null);

                    System.out.println("Texte copié dans le presse-papiers avec succès !");
                    primaryStage.close();
                    break;
                default:
                    break;
            }
        });
    }

    
    public static void main(String[] args) {
        launch(args);
    }
}
