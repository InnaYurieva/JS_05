/* Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.
Якщо прогрес доставки 100 показувати строку "Done"
Якщо прогрес доставки < 100 показувати строку "In progress"
Якщо прогрес доставки null показувати строку "Ready for delivery" */

/* const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
    ]

const ordersB = [
{ name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
] */
/* const showDeliveryStatus = (arr) => {
    let newArr = []
    for (const i of arr) {
        if(i.deliveryProgress === 100){
            newArr.push("Done")
        } 
        if(i.deliveryProgress === null){
            newArr.push("Ready for delivery")
        } 
        if(i.deliveryProgress < 100){
            newArr.push("In Progress")
        }

        
    } return newArr
    }  */
    
//console.log(showDeliveryStatus(ordersA));  // "In Progress", "Done", "Ready for delivery"
//console.log(showDeliveryStatus(ordersB));  // "In progress", "Not Ordered", "Ready for delivery"

const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
    ]

const ordersB = [
{ name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]
const showDeliveryStatus = (arr) => {

    let arrReduce = arr.reduce((acc, elem) => {
        if(elem.deliveryProgress === 100){
            acc.push('Done')
        }
        if(elem.deliveryProgress < 100){
            acc.push("In Progress") // //null < 100, поэтому true 
        } 
        if(elem.deliveryProgress === null){
            acc.push("Ready for delivery")
        } 
        return acc
    }, [])
    return arrReduce.join(', ')
}
console.log(showDeliveryStatus(ordersA));  // "In Progress", "Done", "Ready for delivery"
console.log(showDeliveryStatus(ordersB));  // "In progress", "Not Ordered", "Ready for delivery"

/* document.body.innerHTML = showDeliveryStatus(ordersA)
document.body.innerHTML = showDeliveryStatus(ordersB) */


let homeTask_1 = document.querySelector('.home-task_1')
let homeTask_2 = document.querySelector('.home-task_2')
let resultOrdersA = showDeliveryStatus(ordersA)
let resultOrdersB = showDeliveryStatus(ordersB)
//homeTask.innerHTML = resultOrdersA
homeTask_1.insertAdjacentHTML('afterend', resultOrdersA)
homeTask_2.insertAdjacentHTML('afterend', resultOrdersB)