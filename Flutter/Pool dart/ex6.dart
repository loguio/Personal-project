import 'dart:io';

void main() {
  print("donne un mot enculer");
  String s = stdin.readLineSync() as String;

  if (s.split('').reversed.join() == s) {
    print("is a palindrome");
  } else {
    print("is not");
  }
}
