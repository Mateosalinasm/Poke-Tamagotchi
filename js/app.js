
document.addEventListener("DOMContentLoaded", function() { //This lets the page load first to prevent the prompts to lag
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

        const petName = prompt('What\'s your Tamagotchis name?').toUpperCase()
        const newPet = new Tamagotchi(petName)
        const nameID = document.querySelector('#name')
        nameID.innerHTML = `${petName}`
        alert(`Your new friend ${petName} is born! Take good care of them`)
     
       
    
    // let tama = this.name
    // tama = prompt('What\'s your Tamagotchis name?').toUpperCase()
    // const nameID = document.querySelector('#name')
    // nameID.innerHTML = `${tama}`
    // alert(`Your new friend ${tama} is born! Take good care of them`)

    //Activity Functions
    function petFeed (e){
        e.preventDefault()  
        newPet.hunger--  
        console.log(`${newPet.name} has been fed and feels much better! Hunger level = ${newPet.hunger}` )
        if(newPet.hunger === 5){
            alert(`${petName} is getting awfully hungry, feed him before he gets sick!`)
        } else if(newPet.hunger < 0){
            newPet.hunger === 0
        } else if(newPet.hunger === 10){
            alert(`${petName} starved to death ☠️`)
        }
        
    }

    function petPlay (e){
        e.preventDefault()
        newPet.play--   
        console.log(`${newPet.name} has played and had so much fun! Boredom level = ${newPet.play}` ) 
        if(newPet.play === 5){
            alert(`${petName} is getting bored, play with him before he gets depressed!`)
        } else if(newPet.play < 0){
            newPet.play === 0
        } else if(newPet.play === 10){
            alert(`${petName} got depressed and died ☠️`)
        }

    }

    function petSleep (e){
        e.preventDefault() 
        newPet.sleep--    
        console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${newPet.sleep}` )
        if(newPet.sleep === 5){
            alert(`${petName} is getting sleepy, let him take a nap before he gets insomnia!`)
        } else if(newPet.sleep < 0){
            newPet.sleep === 0
        } else if(newPet.sleep === 10){
            alert(`${petName} got insomnia and died ☠️`)
        }
    }

    setTimeout(() => {
        alert('Your pet is evolving!')
        let charmander = document.querySelector('.egg').src = 'js/images/toppng.com-okemon-charmander-png-high-quality-image-cute-charmander-1105x1061.png'
        charmander.style.width = '150px'
        charmander.style.height = '150px'
    }, 10000);
    setTimeout(() => {
        alert('Your pet is evolving!')
        let charmeleon = document.querySelector('.egg').src = 'js/images/pngegg (1).png'
        charmeleon.style.width = '200px'
        charmeleon.style.height = '200px'
    }, 20000);
    setTimeout(() => {
        alert('Your pet is evolving!')
        let charizard = document.querySelector('.egg').src = 'js/images/pngegg (4).png'
        charizard.style.width = '400px'
        charizard.style.height = '400px'
    }, 35000);
    
    
    
    

//Buttons
    let feed = document.querySelector('.feed')
    let play = document.querySelector('.play')
    let sleep = document.querySelector('.sleep')
    
//Event Listeners
feed.addEventListener('click', petFeed)
play.addEventListener('click', petPlay)
sleep.addEventListener('click', petSleep)

})
