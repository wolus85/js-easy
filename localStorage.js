let people = JSON.parse(localStorage.getItem('people')) || []

const render = function () {
  localStorage.setItem('people', JSON.stringify(people))
  people.filter(function (el) { el.car && el.car.model && console.log(el.car.model) })

}
const addPerson = function (name, lastname, model) {

  const newPerson = {
    name: name,
    lastname: lastname,
    car: { model: model }
  }

  people = people.concat(newPerson)

  render()

}
