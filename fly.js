const velocity = 20
const time = 40
let position = 0

const move = function () {
  const flyTime = time/300
  const displacement = flyTime * velocity
  position += displacement
}

const render = function () {
document.body.innerText = ''

const fly = document.createElement('div')
fly.style.backgroundColor = 'black'
fly.style.width = '50px' 
fly.style.height = '50px'
fly.style.position = 'absolute'
fly.style.left = position + 'px'

document.body.appendChild(fly)
}


setInterval (function(){move(),
render()},time) 

  
render()

