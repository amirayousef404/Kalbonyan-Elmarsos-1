class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}`
    })

    return bio
  }
  set fullName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.fullName} is a ${this.position}`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}
const me = new Employee("Amira", "Yousef", 24, "Engineer", ["Sleep", "walking"])

console.log(me.getBio())
console.log(me.getYearsLeft())

const mySister = new Person("Aya", "Yousef", 21)
console.log(mySister)

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  updateGrade(change) {
    this.grade += change
  }
  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing"
    return `${this.firstName} is ${status} the class.`
  }
}

const student = new student("Amira", "Yousef", 24, 93, [])
console.log(student.getBio())
student.updateGrade(-30)
console.log(student.getBio())
