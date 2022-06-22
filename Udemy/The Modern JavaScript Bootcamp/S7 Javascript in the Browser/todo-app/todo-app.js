// const ps = document.querySelectorAll("p")

// ps.forEach(function (p) {
//   if (p.textContent.includes("the")) {
//     p.remove()
//   }
// })
// challenge 2

const todos = [
  { text: "order cat food", completed: true },
  { text: "clean kitchen", completed: false },
  { text: "Buy food", completed: true },
  { text: "Do work", completed: false },
  { text: "Exercise", completed: true },
]

// const incompleteTodo = todos.filter(function (todo) {
//   return !todo.completed
// })

// const summary = document.createElement("h2")
// summary.textContent = `You have ${incompleteTodo.length} todos left`
// document.querySelector("body").appendChild(summary)

// todos.forEach(function (todo) {
//   const newParagraph = document.createElement("p")
//   newParagraph.textContent = todo.text
//   document.querySelector("body").appendChild(newParagraph)
// })
////challenge 3
// document.querySelector("#add-todo").addEventListener("click", function (e) {
//   console.log("add a new todo")
// })
// challenge 4
// document.querySelector("#new-todo").addEventListener("input", function (e) {
//   console.log(e.target.value)
// })
// challenge 5
const filters = {
  searchText: "",
  hideCompleted: false,
}

const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.tet.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  filteredTodos = filteredTodos.filter(function (todo) {
    if (filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }
  })

  const incompleteTodo = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector("#todos").innerHTML = ""

  const summary = document.createElement("h2")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  document.querySelector("#todos").appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = todo.text
    document.querySelector("#todos").appendChild(newParagraph)
  })
}
renderTodos(todos, filters)

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})
// challenge 6
document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  })
  renderTodos(todos, filters)
  e.target.elements.text.value = ""
})
// challenge 7
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })
