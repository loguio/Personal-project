import 'dart:io';

void main() {
  print("donne un nombre");
  int nb = int.parse(stdin.readLineSync() as String);
  for (int i = nb; i > 0; i--) {
    if (nb % i == 0) {
      print(i);
    }
  }
}
