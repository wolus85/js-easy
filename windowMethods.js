(function () {

  personarray = []

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

  window.alert(`Hello ${name} ${lastname}`)

  const addPerson = function () {
    const newPerson = {
      name: name,
      lastname: lastname
    }

  }



})()