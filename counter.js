
const counter = (function () {
  let number = 0;

  const inc = function () {
  number += 1

  render()
  }


  const render = function () {
  
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