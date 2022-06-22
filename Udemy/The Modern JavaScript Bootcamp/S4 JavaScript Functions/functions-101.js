let greetUser = function () {
  console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge

let convertFahrenheitToCelsius = function (fahrenheit) {
  let tempCelsius = (fahrenheit - 32) * 1.8
  return tempCelsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
