let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)

//challenge
let my = {
  name: "amira",
  age: 24,
  location: "egypt",
}

console.log(`${my.name} is ${my.age} lives in ${my.location}.`)
my.age = my.age + 1
console.log(`${my.name} is ${my.age} lives in ${my.location}.`)
