// Attempt 1: 15:25
const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  let count1 = 0;
  let count2 = 1;
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList[count1] = list1[i];
    newList[count2] = list2[i];
    count1 += 2;
    count2 += 2;
  }
  return newList;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2), 1);
}
console.log(zipListTheSimpleWay(testList1, testList2));
