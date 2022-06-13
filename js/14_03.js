/* Задание 14
Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи */

//const nonUniqueElements = (arr) => {
//console.log(arr.indexOf(10));
//console.log(arr.lastIndexOf(10));
//let a = [...new Set(arr)]
/*  let a = arr.filter((item, index) => {
    return index !== arr.indexOf(item) 
  })
  return a */

//РЕШЕНИЕ
  const nonUniqueElements = (arr) => {
    //console.log(arr.indexOf(10));
    //console.log(arr.lastIndexOf(10));
  let a = arr.filter((elem, index, array) => {
    return index !== array.indexOf(elem) || index !== array.lastIndexOf(elem)
  })
  return a
}

/* const nonUniqueElements = (arr) => {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!uniq.has(element)) {
      uniq.add(element);
      uniqSum += element;
    }
    numSum += element;
  }
  return uniqSum * 2 - numSum;
}; */

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10,9]
//===========================================================