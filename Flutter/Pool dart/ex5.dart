void main() {
  var a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var List = [];
  for (int i = 0; i < a.length; i++) {
    for (int j = 0; j < b.length; j++) {
      if (a[i] == b[j] && !List.contains(a[i])) {
        List.add(a[i]);
      }
    }
  }
  print(List);
}
