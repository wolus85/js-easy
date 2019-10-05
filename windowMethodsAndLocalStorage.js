let arrayOfPeople = JSON.parse(localStorage.getItem('person')) || []

const askForName = function () {
  const name = window.prompt('Write Your Name')
  return name
}
const name = askForName()

const askForLastName = function () {
  const lastname = window.prompt('Write Your Lastname')
  return lastname
}

const lastname = askForLastName()

let hello = window.alert(`Hello ${name} ${lastname}`)


const addPerson = function () {

  const persondata = name + ' ' + lastname
  console.log(persondata)

  arrayOfPeople.push(persondata)
  console.log(arrayOfPeople)

  localStorage.setItem('person', JSON.stringify(arrayOfPeople))
}


addPerson()




