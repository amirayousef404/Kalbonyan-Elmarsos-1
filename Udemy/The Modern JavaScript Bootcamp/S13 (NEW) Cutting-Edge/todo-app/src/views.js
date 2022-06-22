import { getTodos, toggleTodo, removeTodo } from "./todos"
import { getFilters } from "./filters"

// Render application todos based on filters
const renderTodos = () => {
  const { searchText, hideCompleted } = getFilters()
  let filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase())
    const hideCompletedMatch = !hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodo = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector("#todos").innerHTML = ""

  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodo))

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })
  } else {
    const messageEl = document.createElement("p")
    messageEl.classList.add("empty-message")
    messageEl.textContent = "No to-do to show"
    document.querySelector("#todos").appendChild(messageEl)
  }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label")
  const containerEl = document.createElement("div")
  const checkboxEl = document.createElement("input")
  const textEl = document.createElement("span")
  const removeEl = document.createElement("button")

  // setup checkbox
  checkboxEl.setAttribute("type", "checkbox")
  containerEl.appendChild(checkboxEl)
  checkboxEl.checked = todo.completed
  checkboxEl.addEventListener("change", () => {
    toggleTodo(todo.id)
    renderTodos()
  })

  // setup the todo text
  textEl.textContent = todo.text
  containerEl.appendChild(textEl)

  // setup container
  todoEl.classList.add("list-item")
  containerEl.classList.add("list-item__container")
  todoEl.append(containerEl)

  // setup the remove element
  removeEl.textContent = "remove"
  removeEl.classList.add("button", "button--text")
  todoEl.appendChild(removeEl)
  removeEl.addEventListener("click", () => {
    removeTodo(todo.id)
    renderTodos()
  })

  return todoEl
}
// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodo) => {
  const summary = document.createElement("h2")
  summary.classList.add("list-title")
  const plural = incompleteTodo.length === 1 ? "todo" : "todos"
  summary.textContent = `You have ${incompleteTodo.length} ${plural} left`
  return summary
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }
