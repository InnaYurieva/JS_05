//Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false
let compact = (arr) => {
    let a = []
/*     console.log(Boolean(arr[0]));
    console.log(Boolean(arr[1]));
    console.log(Boolean(arr[2]));
    console.log(Boolean(arr[3]));
    console.log(Boolean(arr[4])); */
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (Boolean(element)) {
            a.push(element)
        } 
  
    } return a
}

console.log( compact([1,0,'', null, 'Hello'])); // [1,'Hello']