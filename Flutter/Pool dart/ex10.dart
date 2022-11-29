import 'dart:io';

void main() {
  print("donne un Nombre");
  var a = int.tryParse(stdin.readLineSync() as String);
  if (a != null) {
    for (var i = 2; i < a; i++) {
      if (a % i == 0) {
        print("ce n'est pas un nombre prime !");
        exit(0);
      }
    }
    print("c'est un nombre premier !");
  } else {
    print("Ce n'est pas un nombre");
  }
}
