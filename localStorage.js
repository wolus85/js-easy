let people = JSON.parse(localStorage.getItem('person')) || []


function render() {
  localStorage.setItem('person', JSON.stringify(people))
  for (let i = 0; i < people.length; i++) {
    people[i] && people[i].name && people[i].lastName && people[i].car.model &&
      console.log(people[i])
  }
}


function add(name, lastName, model) {

  const newPerson = {
    name: name,
    lastName: lastName,
    car: {
      model: model
    }
  }

  people = people.concat(newPerson)



  render()
}


