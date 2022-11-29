import 'dart:io';
import 'dart:math';

void main() {
  Random r = new Random();
  int rn = r.nextInt(101); // from 0 upto 3 included
  int rep = -1;
  while (rep != rn) {
    print("trouve le nombre");
    var rep = int.tryParse(stdin.readLineSync() as String);
    if (rep == null) {
      continue;
    }
    if (rep > rn) {
      print("Guess Number is lower");
    } else if (rep < rn) {
      print("Guess Number is Higher");
    } else {
      print("You found it !");
    }
    if (rn == rep) {
      break;
    }
  }
}
