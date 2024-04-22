package app.off;

import javafx.collections.ObservableList;
import javafx.scene.control.Button;
import javafx.scene.control.TableCell;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;


// TableCell personnalisée avec un bouton
    public class TableCellWithButton extends TableCell<password, Void> {
        private final Button button;

        public TableCellWithButton(ObservableList<password> passwords) {
            this.button = new Button("Copier");
            this.button.setOnAction(event -> onButtonClick(passwords));
        }

        @Override
        protected void updateItem(Void item, boolean empty) {
            super.updateItem(item, empty);
            if (empty) {
                setGraphic(null);
            } else {
                setGraphic(button);
            }
        }

        public void onEnterKeyPressed(ObservableList<password> passwords) {
            onButtonClick(passwords);
        }

        private void onButtonClick(ObservableList<password> passwords) {
           // Action à effectuer lors du clic sur le bouton
                System.out.println("Bouton cliqué pour la ligne : " + getIndex());

                StringSelection selection = new StringSelection(passwords.get(getIndex()).getPassword());

                 // Obtention de l'instance du presse-papiers
                Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();

                // Mettre la sélection dans le presse-papiers
                clipboard.setContents(selection, null);

                System.out.println("Texte copié dans le presse-papiers avec succès !");
        }
    }