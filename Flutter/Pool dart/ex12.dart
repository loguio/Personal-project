import 'dart:io';

void main() {
  print("tell me how many number of fibonacci I print");
  var a = int.tryParse(stdin.readLineSync() as String);
  if (a != null) {
    fibo(a);
  } else {
    print('ce n\'est pas un nombre');
    exit(0);
  }
}

void fibo(int s, {int start = 0, int lastnum = 1}) {
  print(start + lastnum);
  if (s != 0) {
    fibo(s - 1, start: lastnum, lastnum: start + lastnum);
  }
}
