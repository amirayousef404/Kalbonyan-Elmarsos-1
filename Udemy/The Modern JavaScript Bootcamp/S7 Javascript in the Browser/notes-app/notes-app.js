// const p = document.querySelector('p')
// p.remove()
const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
]

const ps = document.querySelectorAll("p")

ps.forEach(function (p) {
  p.textContent = "*********"
  console.log(p.textContent)
})

//////////
const newParagraph = document.createElement("p")
newParagraph.textContent = "This is a new element from javascript"
document.querySelector("body").appendChild(newParagraph)
///////////////
const filters = {
  searchText: "",
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector("#notes").innerHTML = ""
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p")
    noteEl.textContent = note.title
    document.querySelector("#notes").appendChild(noteEl)
  })
}
document.querySelector("#create").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked"
})
///////////

document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove()
  })
})
///////////////
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
//////////
// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault()
//   console.log(e.target.elements.firstName.value)
//   e.target.elements.firstName.value = ""
// })
/////////// checkbox
// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   console.log(e.target.checked)
// })
////////////dropdown
document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value)
})
/////////////
