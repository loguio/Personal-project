import 'dart:io';
import 'dart:math';

void main() {
  while (true) {
    print("début du jeux!");
    Random r = new Random();
    int rn = r.nextInt(3); // from 0 upto 3 included
    print("choose Rock paper or cisors (r/p/c)");
    String s = stdin.readLineSync() as String;
    switch (s.trim()) {
      case 'r':
        if (rn == 0) {
          print("Equal");
        }
        if (rn == 1) {
          print("You loose");
        }
        if (rn == 2) {
          print("You win !");
        }
        break;
      case "p":
        if (rn == 0) {
          print("YOU WIN");
        }
        if (rn == 1) {
          print("Equal");
        }
        if (rn == 2) {
          print("You Loose !");
        }
        break;
      case "c":
        if (rn == 0) {
          print("You Loose !");
        }
        if (rn == 1) {
          print("You win !");
        }
        if (rn == 2) {
          print("Equal");
        }
        break;
      default:
        print("Choose a good answer !");
    }
    print("Fin du jeux !");
  }
}
