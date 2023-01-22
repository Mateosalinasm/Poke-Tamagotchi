

document.addEventListener("DOMContentLoaded", function() {
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
            }, 3000)
        }
    
    }

    let tama = this.name
    tama = prompt('What\'s your Tamagotchis name?').toUpperCase()
    const nameID = document.querySelector('#name')
    nameID.innerHTML = `${tama}`
    alert(`Your new friend ${tama} is born! Take good care of them`)

//New Pet

    const newPet = new Tamagotchi(tama)


//Functions
    function petFeed (e){
        e.preventDefault()  
        newPet.hunger--  
        console.log(`${newPet.name} has been fed and feels much better! Hunger level = ${newPet.hunger}` )
        if(newPet.hunger === 5){
            alert(`${tama} is getting awfully hungry, feed him before he gets sick!`)
        } else if(newPet.hunger < 0){
            newPet.hunger === 0
        } else if(newPet.hunger === 10){
            alert(`${tama} starved to death ☠️`)
        }
        
    }

    function petPlay (e){
        e.preventDefault()
        newPet.play--   
        console.log(`${newPet.name} has played and had so much fun! Boredom level = ${newPet.play}` ) 
        if(newPet.play === 5){
            alert(`${tama} is getting bored, play with him before he gets depressed!`)
        } else if(newPet.play < 0){
            newPet.play === 0
        } else if(newPet.play === 10){
            alert(`${tama} got depressed and died ☠️`)
        }

    }

    function petSleep (e){
        e.preventDefault() 
        newPet.sleep--    
        console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${newPet.sleep}` )
        if(newPet.sleep === 5){
            alert(`${tama} is getting sleepy, let him take a nap before he gets insomnia!`)
        } else if(newPet.sleep < 0){
            newPet.sleep === 0
        } else if(newPet.sleep === 10){
            alert(`${tama} got insomnia and died ☠️`)
        }
    }

//Buttons
    let feed = document.querySelector('.feed')
    let play = document.querySelector('.play')
    let sleep = document.querySelector('.sleep')

//Event Listeners
    feed.addEventListener('click', petFeed)
    play.addEventListener('click', petPlay)
    sleep.addEventListener('click', petSleep)


})