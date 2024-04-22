package com.password_manager;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class CSVWriter {

    public static void writeToCSV(List<password> personnes, String filePath) {
        try (FileWriter writer = new FileWriter(filePath)) {
            // Écriture de l'en-tête du fichier CSV
            writer.append("Nom,password\n");

            // Écriture des données des personnes dans le fichier CSV
            for (password personne : personnes) {
                        writer.append(personne.getName())
                        .append(",")
                        .append(personne.getPassword())
                        .append("\n");
            }

            System.out.println("Les données ont été écrites avec succès dans le fichier CSV.");
        } catch (IOException e) {
            System.out.println("Une erreur est survenue lors de l'écriture dans le fichier CSV : " + e.getMessage());
        }
    }

}
