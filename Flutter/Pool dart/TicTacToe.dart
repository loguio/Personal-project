import 'dart:io';

List game = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];
void main(List<String> args) {
  bool win = false;
  String j1 = "X";
  String j2 = "O";
  String joueur = "";
  int tour = 0;
  while (win != true) {
    if (tour % 2 == 0) {
      joueur = j1;
    } else {
      joueur = j2;
    }
    printTab();
    input(joueur);
    if (verifie(game) != "") {
      print("$joueur a Gagner !");
      win = true;
    }
    tour++;
  }
}

void input(String joueur) {
  print("donner les coordonnée d'ou vous voulez jouer :\nx :");
  var x = int.tryParse(stdin.readLineSync() as String);
  print("y :");
  var y = int.tryParse(stdin.readLineSync() as String);
  if (x == null || y == null) {
    print("x ou y n'est pas un nombre");
    input(joueur);
  } else {
    if (game[y][x] != " ") {
      print("la case a déja été jouée !");
      input(joueur);
    } else {
      game[y][x] = joueur;
    }
  }
}

String verifie(List list) {
  for (int i = 0; i < list.length; i++) {
    int j1 = 0;
    int j2 = 0;
    int j1v = 0;
    int j2v = 0;
    for (int j = 0; j < list[0].length; j++) {
      if (list[i][j] == "X") {
        j1++;
      } else if (list[i][j] == "O") {
        j2++;
      }
      if (list[j][i] == "O") {
        j2v++;
      } else if (list[j][i] == "X") {
        j1v++;
      }
    }
    if (j1 == 3 || j1v == 3) {
      return "X";
    } else if (j2 == 3 || j2v == 3) {
      return "O";
    }
  }
  if (list[0][0] == "X" && list[1][1] == "X" && list[2][2] == "X") {
    return "X";
  }
  if (list[0][2] == "X" && list[1][1] == "X" && list[2][0] == "X") {
    return "X";
  }
  if ((list[0][0] == "O" && list[1][1] == "O" && list[2][2] == "O") ||
      (list[0][2] == "O" && list[1][1] == "O" && list[2][0] == "O")) {
    return "O";
  }
  return "";
}

void printTab() {
  int a = game.length;
  for (int i = 0; i < a; i++) {
    for (int j = 0; j < a; j++) {
      stdout.write(" ---");
    }
    stdout.write("\n");
    for (int j = 0; j < a + 1; j++) {
      if (j < a) {
        stdout.write("| " + game[i][j] + " ");
      } else {
        stdout.write("|");
      }
    }
    stdout.write("\n");
  }
  for (int j = 0; j < a; j++) {
    stdout.write(" ---");
  }
  print("");
}
