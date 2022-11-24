import 'dart:io';
import 'dart:math';

void main() {
  print("Choissisez la taille de votre mdp");
  var s = int.tryParse(stdin.readLineSync() as String);
  if (s != null) {
    print(getRandomString(s));
  }
}

const _chars =
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890;!,ù%.?£*';
Random _rnd = Random();

String getRandomString(int length) => String.fromCharCodes(Iterable.generate(
    length, (_) => _chars.codeUnitAt(_rnd.nextInt(_chars.length))));
