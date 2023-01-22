//Display Hunger, Play, Sleep
const hungerScore = document.querySelector('.hungerScore')
const playScore = document.querySelector('.playScore')
const sleepScore = document.querySelector('.sleepScore')



//Class
class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.play = 0
        this.sleep = 0
        setInterval(() => {
            this.hunger += 1
            this.play += 1
            this.sleep += 1 
            hungerScore.innerHTML = this.hunger
            playScore.innerHTML = this.play
            sleepScore.innerHTML = this.sleep
        }, 2000)
    }
   
}

const tama = this.name
this.name = prompt('What\'s your Tamagotchis name?')
const nameID = document.querySelector('.name')
nameID.innerHTML = `${tama}`
alert(`Your new friend ${tama} is born! Take good care of him`)

//New Pet

const newPet = new Tamagotchi(tama)


//Functions
function petFeed (e){
    e.preventDefault()  
    this.hunger--  
    console.log(`${newPet.name} has been fed and feels much better! Hunger level = ${this.hunger}` )
    if(this.hunger > 5){
        alert(`${tama} is getting awfully hungry, feed him before he gets sick!`)
    } else if(this.hunger < 0){
        this.hunger = 0
    } else if(this.hunger > 10){
        alert(`${tama} starved to death ☠️`)
    }
    
}
function petPlay (e){
    e.preventDefault()
    this.play--   
    console.log(`${newPet.name} has played and had so much fun! Boredom level = ${this.play}` ) 
    if(this.play > 5){
        alert(`${tama} is getting bored, play with him before he gets depressed!`)
    } else if(this.play < 0){
        this.play = 0
    } else if(this.play > 10){
        alert(`${tama} got depressed and died ☠️`)
    }

}
function petSleep (e){
    e.preventDefault() 
    this.sleep--    
    console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${this.sleep}` )
    if(this.sleep > 5){
        alert(`${tama} is getting sleepy, let him take a nap before he gets insomnia!`)
    } else if(this.sleep < 0){
        this.sleep = 0
    } else if(this.sleep > 10){
        alert(`${tama} got insomnia and died ☠️`)
    }
}


//Buttons›
let feed = document.querySelector('.feed')
let play = document.querySelector('.play')
let sleep = document.querySelector('.sleep')

//Event Listeners
feed.addEventListener('click', petFeed)
play.addEventListener('click', petPlay)
sleep.addEventListener('click', petSleep)


