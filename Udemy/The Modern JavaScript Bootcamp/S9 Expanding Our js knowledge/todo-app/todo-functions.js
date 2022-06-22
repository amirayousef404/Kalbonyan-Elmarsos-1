"use strict"
// Fetch existing todos from localStorage
const getSaveTodos = () => {
  const todosJSON = localStorage.getItem("todos")

  try {
    return noteJSON ? JSON.parse(noteJSON) : []
  } catch (e) {
    return []
  }
}

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

//remove todo
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed value for a give todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodo = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector("#todos").innerHTML = ""

  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodo))

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo))
  })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("div")
  const checkboxEl = document.createElement("input")
  const textEl = document.createElement("span")
  const removeEl = document.createElement("button")

  // setup checkbox
  checkboxEl.setAttribute("type", "checkbox")
  todoEl.appendChild(checkboxEl)
  checkboxEl.checked = todo.completed
  checkboxEl.addEventListener("change", () => {
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
  removeEl.addEventListener("click", () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  return todoEl
}
// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodo) => {
  const summary = document.createElement("h2")
  summary.textContent = `You have ${incompleteTodo.length} todos left`
  return summary
}
