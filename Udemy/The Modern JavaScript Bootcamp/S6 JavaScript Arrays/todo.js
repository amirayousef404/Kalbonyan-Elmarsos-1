// challenge 1

// const todos = [
//   "order cat food",
//   "clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ]

// console.log(`You have ${todos.length} todos`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[1]}`)

//challenge 2

// todos.splice(2, 1)
// todos.push("buy coffee")
// todos.splice(0, 1)

//challenge 3

// todos.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`)
// })
////challenge 4

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1
//   console.log(`${num}. ${todos[count]}`)
// }

//challenge 5

const todos = [
  { text: "order cat food", completed: true },
  { text: "clean kitchen", completed: false },
  { text: "Buy food", completed: true },
  { text: "Do work", completed: false },
  { text: "Exercise", completed: true },
]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo, index) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, "d78o work")
console.log(todos)

// challnge 6
const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}
console.log(getThingsToDo(todos))

// challenge 7

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)
