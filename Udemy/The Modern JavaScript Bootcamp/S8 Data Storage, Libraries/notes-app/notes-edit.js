const title = document.querySelector("#note-title")
const body = document.querySelector("#note-body")
const removeEl = document.querySelector("#remove-note")
const dateEl = document.querySelector("#last-edited")
const noteId = location.hash.substring(1)
const notes = getSaveNotes()
const note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign("/index.html")
}

title.value = note.title
body.value = note.body
dateEl.textContent = generateLastEdited(note.updatedAt)

title.addEventListener("input", function (e) {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateEl.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

body.addEventListener("input", function (e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateEl.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

removeEl.addEventListener("click", function (e) {
  removeNotes(note.id)
  saveNotes(notes)
  location.assign("/index.html")
})

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    note = notes.find(function (note) {
      return note.id === noteId
    })

    if (note === undefined) {
      location.assign("/index.html")
    }

    title.value = note.title
    body.value = note.body
    dateEl.textContent = generateLastEdited(note.updatedAt)
  }
})
