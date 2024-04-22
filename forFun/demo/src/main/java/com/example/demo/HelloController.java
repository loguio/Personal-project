package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class HelloController  {

    @GetMapping("/demineur")
    public String demineurPage(Model model) {
        // Simuler des données de la grille pour l'exemple
        int rows = 10;
        int cols = 10;
        int[][] grid = new int[rows][cols];
        // Ici, vous rempliriez la grille avec les données du jeu (chiffres ou états des cases)

        // Ajouter la grille au modèle pour l'affichage dans la vue Thymeleaf
        model.addAttribute("grid", grid);

        return "test"; // Renvoie le nom de la page HTML associée au démineur
    }

}
