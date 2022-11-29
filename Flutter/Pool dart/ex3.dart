import 'dart:io';

void main() {
  var a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 5) {
      print(a[i]);
    }
  }
}
