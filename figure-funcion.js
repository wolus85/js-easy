const makeColorDiv = function (color = 'red') {
  const div = document.createElement('div')
  div.style.backgroundColor = color
  return div
}

const makeSquare = function (div) {
  div.style.width = '100px'
  div.style.height = '100px'
  return div
}

const makeCircle = function (div) {
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.borderRadius = '50px'
  return div
}


const appendDiv = function(div){
  document.body.appendChild(div)
  return div
}


appendDiv(makeSquare(makeColorDiv('blue')))
appendDiv(makeCircle(makeColorDiv('brown')))