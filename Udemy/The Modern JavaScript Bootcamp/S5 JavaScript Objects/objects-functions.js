let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
}

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge
let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit - 32) / 1.8 + 273.15,
    celsius: (fahrenheit - 32) / 1.8,
  }
}

let temps = convertFahrenheit(74)
console.log(temps)
