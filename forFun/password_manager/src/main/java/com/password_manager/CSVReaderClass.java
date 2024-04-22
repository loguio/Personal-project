package com.password_manager;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class CSVReaderClass {

    public static ObservableList<password> reader() throws CsvException {
        String filePath = "C:\\Users\\MARIU\\OneDrive\\Documents\\Personal-project\\forFun\\password_manager\\src\\db\\test.csv"; // Remplacez par votre chemin de fichier CSV
        ObservableList<password> personnes = FXCollections.observableArrayList();

        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            // Lecture de toutes les lignes du fichier CSV
            List<String[]> lignes = reader.readAll();
            boolean a=false;
            // Parcourir et afficher chaque ligne du fichier CSV
            for (String[] ligne : lignes) {
                if(!a){
                    a= true;
                }else{
                personnes.add(new password(ligne[0], ligne[1]));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return personnes;
    }
}
