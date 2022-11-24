import 'dart:io';
import 'dart:math';

void main() {
  final random = Random();
  List<int> randList = List.generate(10, (_) => random.nextInt(100));
  print(a(randList));
}

List a(List ids) {
  return ids.toSet().toList();
}
