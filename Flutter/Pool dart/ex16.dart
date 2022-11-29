import 'dart:io';
import 'dart:math';

void main(List<String> args) {
  Random rnd = Random();
  int a = rnd.nextInt(9000) + 1000;
  var b = a.toString();
  while (true) {
    int cows = 0;
    int bull = 0;
    print("give a 4 digit NUmber");
    String rep = stdin.readLineSync() as String;
    if (rep[0] == b[0]) {
      cows++;
    } else if (rep.contains(b[0])) {
      bull++;
    }
    if (rep[1] == b[1]) {
      cows++;
    } else if (rep.contains(b[1])) {
      bull++;
    }
    if (rep[2] == b[2]) {
      cows++;
    } else if (rep.contains(b[2])) {
      bull++;
    }
    if (rep[3] == b[3]) {
      cows++;
    } else if (rep.contains(b[3])) {
      bull++;
    }
    if (cows == 4) {
      print("GG");
      exit(0);
    }
    print("you have $cows cows and $bull bull ! ");
  }
}
