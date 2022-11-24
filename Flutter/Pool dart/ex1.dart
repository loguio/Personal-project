import 'dart:io';

void main() {
  stdout.write("tell me your name\n");
  String name = stdin.readLineSync() as String;
  stdout.write("tell me your age\n");
  int age = 0;
  try {
    age = int.parse(stdin.readLineSync() as String);
  } catch (e) {
    print(e);
    age = 0;
  }
  int years = 100 - age;
  stdout.write("$name you will have 100 yo in $years"); // Print to console.
}
