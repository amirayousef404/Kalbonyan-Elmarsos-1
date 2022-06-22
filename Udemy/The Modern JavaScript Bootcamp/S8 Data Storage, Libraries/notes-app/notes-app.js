let notes = getSaveNotes()

const filters = {
  searchText: "",
  sortBy: "byEdited",
}

renderNotes(notes, filters)

document.querySelector("#create").addEventListener("click", function (e) {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: uuidv4(),
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  })
  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})
// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// //challenge
// const dateOne = new Date("January 13 1998 02:00:00")
// const dateTwo = new Date()
// const timestampOne = dateOne.getTime()
// const timestampTwo = dateTwo.getTime()

// if (timestampOne < timestampTwo) {
//   console.log(dateOne.toString())
// } else if (timestampTwo < timestampOne) {
//   console.log(dateTwo.toString())
// }

//moment
// const now = moment()
// now.subtract(1, "week").subtract(20, "days")
// console.log(now.format("MMMM Do, YYYY"))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

// // challenge

// const birthday = moment()
// birthday.year(1998).month(0).date(13)
// console.log(birthday.format("MMM D, YYYY"))
