const data = {
  location: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.tirm()
    this.locations.push(this._location)
  },
}

data.location = "Cairo"
data.location = "Minia"
console.log(data)
