import 'dart:io';

void main(List<String> args) {
  int min = 0;
  int max = 100;
  print(
      "pensez a un nombre entre 0 et 100 et dites nous plus ou moin ou good ");
  while (true) {
    print((((max - min) / 2) + min).toInt());
    String input = stdin.readLineSync() as String;
    if (input == "moin") {
      max = (((max - min) / 2) + min).toInt();
    } else if (input == "plus") {
      min = (((max - min) / 2) + min).toInt();
    } else if (input == "good") {
      print("Super partie merci");
      break;
    } else {
      print("ce n'est pas plus ou moins");
    }
  }
}
