// Fetch existing todos from localStorage
const getSaveTodos = function () {
  const todosJSON = localStorage.getItem("todos")

  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

//remove todo
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed value for a give todo
const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })

  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodo = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector("#todos").innerHTML = ""

  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodo))

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo))
  })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div")
  const checkboxEl = document.createElement("input")
  const textEl = document.createElement("span")
  const removeEl = document.createElement("button")

  // setup checkbox
  checkboxEl.setAttribute("type", "checkbox")
  todoEl.appendChild(checkboxEl)
  checkboxEl.checked = todo.completed
  checkboxEl.addEventListener("change", function () {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // setup the todo text
  textEl.textContent = todo.text
  todoEl.appendChild(textEl)

  // setup the remove element
  removeEl.textContent = "x"
  todoEl.appendChild(removeEl)
  removeEl.addEventListener("click", function () {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  return todoEl
}
// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodo) {
  const summary = document.createElement("h2")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  return summary
}
