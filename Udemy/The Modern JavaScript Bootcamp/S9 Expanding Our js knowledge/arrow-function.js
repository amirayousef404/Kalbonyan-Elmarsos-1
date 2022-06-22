const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}

console.log(square(5))

const people = [
  {
    name: "Amira",
    age: 24,
  },
  {
    name: "Andrew",
    age: 27,
  },
  {
    name: "Jess",
    age: 22,
  },
]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// challenge
const person22 = people.find((person) => person.age === 22)
console.log(person22.name)
