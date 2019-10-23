const makeColorDiv = function (color = 'red') {
  const div = document.createElement('div')
  div.style.backgroundColor = color
  return div
}

const appendDiv = function (container = document.body) {
  container.appendChild(this.element)
}


function Square(color) {
  this.element = makeColorDiv(color)
  this.element.style.width = '100px'
  this.element.style.height = '100px'

}
Square.prototype.append = appendDiv


function Circle(color){
  this.element = makeColorDiv(color)
  this.element.style.width = '100px'
  this.element.style.height = '100px'
  this.element.style.borderRadius = '50px'
}
Circle.prototype.append = appendDiv

const square = new Square('blue')
const circle = new Circle ('red')

square.append()
circle.append()


