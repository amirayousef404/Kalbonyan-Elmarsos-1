import { updatedNote, removeNote } from "./notes"
import { initializeEditPage, generateLastEdited } from "./views"

const title = document.querySelector("#note-title")
const body = document.querySelector("#note-body")
const removeEl = document.querySelector("#remove-note")
const dateEl = document.querySelector("#last-edited")
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

title.addEventListener("input", (e) => {
  const note = updatedNote(noteId, {
    title: e.target.value,
  })
  dateEl.textContent = generateLastEdited(note.updatedAt)
})

body.addEventListener("input", (e) => {
  const note = updatedNote(noteId, {
    body: e.target.value,
  })
  dateEl.textContent = generateLastEdited(note.updatedAt)
})

removeEl.addEventListener("click", (e) => {
  removeNote(noteId)
  location.assign("/index.html")
})

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    initializeEditPage(noteId)
  }
})
