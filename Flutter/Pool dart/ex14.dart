import 'dart:io';

void main() {
  print("donne une phrase avec plusieurs mot !");
  String s = stdin.readLineSync() as String;
  print(s.split(' ').reversed.join(" "));
}
