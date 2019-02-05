let people = [{
  name: 'Mark',
  food: 'pizza'
}, {
  name: 'D$',
  food: 'meat'
}, {
  name: 'Porter',
  food: 'Vegetables'
}, {
  name: 'Zach',
  food: 'pizza'
}, {
  name: 'Chrissy',
  food: 'piZza'
}]









//let people2 = []


// console.log(`Hello my name is ${people[0].name} and my favorite food is ${people[0].food}`)
// console.log(`Hello my name is ${people[1].name} and my favorite food is ${people[1].food}`)
// console.log(`Hello my name is ${people[2].name} and my favorite food is ${people[2].food}`)

// for (let i = 0; i < people.length; i++) {
//   //alias a temporary variable for each itteration
//   let person = people[i];
//   //logic for the loop
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
// }
// console.log('done')

// while (people.length > 0) {
//   console.log(`Hello my name is ${people[0].name} and my favorite food is ${people[0].food}`)
//   people2.push(people[0])
//   people.shift()
// }

// do {
//   console.log('do once')
// } while (false);


// people.forEach(person => {
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
// })
// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   console.log(`Hello my name is ${person.name} and my favorite food is ${person.food}`)
// }




//FILTER RETURNS AN ARRAY OF ITEMS THAT MEET THE CONDITION
// let pizzaLovers = people.filter(person => {
//   return person.food.toLowerCase() == 'pizza'
// })
// console.log(pizzaLovers)
// let loopLovers = []
// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   if (person.food.toLowerCase() == 'pizza') {
//     loopLovers.push(person)
//   }
//}


//FIND RETURNS THE FIRST ELEMENT FROM THE ARRAY THAT MEETS THE CONDITION
// let foundPerson = people.find(person => {
//   return (person.food.toLowerCase() == 'vegetables' || person.food.toLowerCase() == 'pizza')
// })
// console.log(foundPerson)
// let foundLoopPerson = {}
// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   if (person.food.toLowerCase() == 'vegetables' || person.food.toLowerCase() == 'pizza') {
//     foundLoopPerson = person
//     break;
//   }
// }




//MAP ITTERATES OVER THE ARRAY AND RUNS THE FUNCTION WHATEVER IS RETURNED REPLACES EACH ELEMENT
// let justNames = people.map(person => person.name)

// let loopNames = []
// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   loopNames.push(person.name)
// }



// let nums = [1, 2, 3, 4, 5, 6]
// let doubleNums = nums.map(num => num * 2)



// let me = {
//   name: 'Mark',
//   age: 30,
//   food: 'pizza',
//   hair: true,
//   eyes: true
// }

// //for in
// people.forEach(person => {
//   for (let prop in person) {
//     console.log(person[prop])
//   }
//   console.log('____________')
// })

let template = ''
people.forEach(person => {
  debugger
  template += `<li>${person.name} likes ${person.food}</li>`
})

document.getElementById('staff').innerHTML = template