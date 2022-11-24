void main() {
  var a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  int i = 0;
  var l = [];
  for (var j in a) {
    if (i % 2 == 0) {
      l.add(j);
    }
    i++;
  }
  print(l);
}
