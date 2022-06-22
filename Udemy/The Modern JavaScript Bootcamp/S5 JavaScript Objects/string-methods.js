let name = "   Amira Yousef"

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = "123456passwordamira"
console.log(password.includes("amira"))

console.log(name.trim())

//challenge

let isAvalidPassword = function (pass) {
  let passLength = pass.length
  if (passLength > 8 && !pass.includes("password")) {
    return true
  } else {
    return false
  }
}

console.log(isAvalidPassword("sdfghj"))
console.log(isAvalidPassword("passwordghjkl"))
