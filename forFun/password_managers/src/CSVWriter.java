
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class CSVWriter {

    public static void writeToCSV(List<Personne> personnes, String filePath) {
        try (FileWriter writer = new FileWriter(filePath)) {
            // Écriture de l'en-tête du fichier CSV
            writer.append("ID,Nom,Âge\n");

            // Écriture des données des personnes dans le fichier CSV
            for (Personne personne : personnes) {
                writer.append(String.valueOf(personne.getId()))
                        .append(",")
                        .append(personne.getNom())
                        .append(",")
                        .append(String.valueOf(personne.getAge()))
                        .append("\n");
            }

            System.out.println("Les données ont été écrites avec succès dans le fichier CSV.");
        } catch (IOException e) {
            System.out.println("Une erreur est survenue lors de l'écriture dans le fichier CSV : " + e.getMessage());
        }
    }

}
