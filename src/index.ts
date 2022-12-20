export function merge(collection1: number[], collection2: number[]): number[] {
  var collection3: number[] = [];
  var i: number = 0;
  var j: number = 0;
  //since collection1 and collection2 are sorted.
  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      collection3.push(collection1[i]);
      i++;
    } else {
      collection3.push(collection2[j]);
      j++;
    }
  }
  //push the rest of collection1
  while (i < collection1.length) {
    collection3.push(collection1[i]);
    i++;
  }
  //push the rest of collection2
  while (j < collection2.length) {
    collection3.push(collection2[j]);
    j++;
  }
  return collection3;
}
