import { v4 as uuidv4 } from "uuid"

let todos = []

// Fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos")

  try {
    todos = noteJSON ? JSON.parse(noteJSON) : []
  } catch (e) {
    todos = []
  }
}

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  })
  saveTodos()
}

loadTodos()

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

// Toggle the completed value for a give todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }
