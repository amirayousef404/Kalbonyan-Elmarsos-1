let isAccountLocked = false
let userRole = "admin"

if (isAccountLocked) {
  console.log("is account locked")
} else {
  console.log("welcome!")
}

if (isAccountLocked) {
  console.log("is account locked")
} else if (userRole === "admin") {
  console.log("welcome admin")
} else {
  console.log("welcome")
}

//challenge

let temp = 45

if (temp <= 32) {
  console.log("It is freezing outside")
} else if (temp >= 110) {
  console.log("It is hot outside")
} else {
  console.log("it is pretty nice out")
}
