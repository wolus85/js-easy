

function MakeCat(sound){
this.sound = sound;
this.makeSound()
}

MakeCat.prototype.makeSound = function(){console.log(this.sound)}


const newCat = function (constructor, el) {
const cat = new constructor(el)


return cat 

}

const a = newCat(MakeCat,'wrrrr')


let cats = []
for (let i = 0; i <5; i++) {

cats.push(newCat(MakeCat, 'Mrrrr'))
}

cats.push(a)

