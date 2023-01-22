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
    if(this.hunger > 5){
        alert(`${this.name} is getting awfully hungry, feed him before he gets sick!`)
    } else if(this.hunger < 0){
        this.hunger = 0
    } else if(this.hunger > 10){
        alert(`${this.name} starved to death ☠️`)
    }
    
}

function petPlay (e){
    e.preventDefault()   
    console.log(`${newPet.name} has played and had so much fun! Boredom level = ${this.boredom}` )
    if(this.boredom > 5){
        alert(`${this.name} is getting bored, play with him before he gets depressed!`)
    }else if(this.boredom > 10){
        alert(`${this.name} got depressed and died ☠️`)
    }

}

function petSleep (e){
    e.preventDefault()    
    console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${this.fatigue}` )
    if(this.fatigue > 5){
        alert(`${this.name} is getting sleepy, let him take a nap before he gets insomnia!`)
    }else if(this.fatigue > 10){
        alert(`${this.name} got insomnia and died ☠️`)
    }
}

//Counters

// let feedCount = []
// let sleepCount = []
// let playCount = []

