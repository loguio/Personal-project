import 'dart:io';

void main(List<String> args) {
  int a = 3;
  for (int i = 0; i < a; i++) {
    for (int j = 0; j < a; j++) {
      stdout.write(" ---");
    }
    stdout.write("\n");
    for (int j = 0; j < a + 1; j++) {
      stdout.write("|   ");
    }
    stdout.write("\n");
  }
  for (int j = 0; j < a; j++) {
    stdout.write(" ---");
  }
}
