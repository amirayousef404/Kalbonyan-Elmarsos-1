const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    },
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const creatAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = creatAdder(10)
console.log(add10(-2))
// challenge
const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount
  }
}
const tip20 = createTipper(0.2)
const tip30 = createTipper(0.3)
console.log(tip20(100))
console.log(tip20(80))
console.log(tip30(100))
