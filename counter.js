
const counter = (function () {

  const numberStorage = JSON.parse(localStorage.getItem('numberStorage')) || 0

  let number = +numberStorage;

  const inc = function () {
  number += 1

  render()
  }


  const render = function () {
  
    localStorage.setItem('numberStorage',JSON.stringify(number))

  document.body.innerText = ''

  const button = document.createElement('button')
  const h1 = document.createElement('h1')

  button.innerText = '+'
  h1.innerText = number

  document.body.appendChild(button)
  document.body.appendChild(h1)

  button.addEventListener('click', inc)


  }

  render()

})()