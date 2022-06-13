/* Задание 12
 Написати ф-ю <strong>calculateDogAge</strong> яка приймає один  параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини) */
const calculateDogAge = (dogs) => {
  let agePeople = dogs / 7 * 365
  let a = agePeople / 365
  let b = Math.floor(a) * 365
  let c = (agePeople - b)/30.417

  return `собаке ${Math.floor(a)} лет и ${Math.floor(c)} месяцев`

}
console.log(calculateDogAge(60)); 

//из интернета
/* function jarh(x) {
  var y = 365;
  var y2 = 31;
  var remainder = x % y;
  var casio = remainder % y2;
  year = (x - remainder) / y;
  month = (remainder - casio) / y2;
  var result ="--- Лет ---" + year + "--- Месяцев ---" + month + "--- Дней ---" + casio;
  console.log(remainder) ;
  console.log(result) ;
  }
  console.log(jarh(2085)); */
//===========================================================