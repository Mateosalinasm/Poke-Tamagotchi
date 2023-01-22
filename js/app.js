class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.boredom = 0
        this.fatigue = 0
    }
}

this.name = prompt('What\'s your Tamagotchis name?')
const nameID = document.querySelector('.name')
nameID.innerHTML = `${this.name}`
alert(`Your new friend ${this.name} is born! Take good care of him`)

//New Pet

const newPet = new Tamagotchi(this.name)


//Buttons›

let feed = document.querySelector('.feed')
let play = document.querySelector('.play')
let sleep = document.querySelector('.sleep')


//Event Listeners
feed.addEventListener('click', petFeed)
play.addEventListener('click', petPlay)
sleep.addEventListener('click', petSleep)


//Functions
function petFeed (e){
    e.preventDefault()  
    this.hunger -= 1  
    console.log(`${newPet.name} has been fed and feels much better! Hunger level = ${this.hunger}` )
    
}

function petPlay (e){
    e.preventDefault()   
    console.log(`${newPet.name} has played and had so much fun! Boredom level = ${this.boredom}` )
}

function petSleep (e){
    e.preventDefault()    
    console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${this.fatigue}` )
}

//Counters

// let feedCount = []
// let sleepCount = []
// let playCount = []

