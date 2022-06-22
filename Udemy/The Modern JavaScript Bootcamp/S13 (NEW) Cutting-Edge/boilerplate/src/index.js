const todo = {
  id: "SADFGHJKLRTYUIO",
  text: " pay the bills",
  completed: false,
}

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`)
}
printTodo(todo)

const {
  text: todoText,
  completed,
  details = "no details provided",
  ...others
} = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)
// // const calcAverage = (thing, ...numbers) => {
// //   let sum = 0
// //   numbers.forEach((num) => (sum += num))
// //   const average = sum / numbers.length
// //   return `The average ${thing} is ${average}`
// // }

// // console.log(calcAverage("age", 0, 20, 50, 60))

// // challenge

// const printTeam = (team, coach, ...players) => {
//   console.log(`Team: ${team}`)
//   console.log(`Coach: ${coach}`)
//   console.log(`Players: ${players.join(",")}`)
// }

// const team = {
//   name: "Liberty",
//   coach: "Casey Penn",
//   players: ["Marge", "Aiden", "Herbert", "Sherry"],
// }
// printTeam(team.name, team.coach, ...team.players)

// let cities = ["Barcelona", "Cairo", "Minia"]
// cities = [...cities, "Asyut"]
// console.log(cities)

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5,
//   yearBuilt: 2017,
// }
// let newHouse = {
//   basement: true,
//   bedrooms: 3,
//   ...house,
// }

// console.log(house)
// console.log(newHouse)

// const person = {
//   name: "Amira",
//   age: 24,
// }
// const location = {
//   city: "Minia",
//   country: "Egypt",
// }
// const overview = {
//   ...person,
//   ...location,
// }

// console.log(overview)
