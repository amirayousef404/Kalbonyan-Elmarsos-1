// const notes = ["Note 1", "Note 2", "Note 3"]
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
console.log(notes.pop())
// notes.push("My new note")

// console.log(notes.shift())
// notes.unshift("My first note")
// notes.splice(1, 1, "This is now the new scond item")

// notes[2] = "This is now the new note 3"

console.log(notes.length)
console.log(notes)
//////////////foreach

notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})
///////////for loop
// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count])
// }
///////////////////
// console.log(notes.indexOf("Note 2"))

const index = notes.findIndex(function (note, index) {
  // console.log(note)
  return note.title === "Habbits to work on"
})

console.log(index)
////////////////// find

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return note[index]
// }

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}
const note = findNote(notes, "my next trip")
console.log(note)
///////////////filter
const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

console.log(findNotes(notes, "eating"))
///////////sort

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)
