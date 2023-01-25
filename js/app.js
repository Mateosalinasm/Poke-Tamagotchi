
document.addEventListener("DOMContentLoaded", function() { //This lets the page load first to prevent the prompts to lag
//Display Hunger, Play, Sleep
    const hungerScore = document.querySelector('.hungerScore')
    const playScore = document.querySelector('.playScore')
    const sleepScore = document.querySelector('.sleepScore')
    let alertShownSick = false 
    let alertShownBored = false
    let alertShownTired = false
    let alertShownDead = false
    let endGame;
    
   
    

//Class
    class Tamagotchi {
        constructor(name){
            this.name = name
            this.hunger = 0
            this.play = 0
            this.sleep = 0
            endGame = setInterval(() => {
                this.hunger += 1
                this.play += 1
                this.sleep += 1 
                hungerScore.innerHTML = this.hunger
                playScore.innerHTML = this.play
                sleepScore.innerHTML = this.sleep
                //Pet gets too hungry
                if(newPet.hunger >= 5 && !alertShownSick){
                    newPet.hunger = 5
                    alert(`${petName} is getting awfully hungry, feed him before he gets sick!`)
                    alertShownSick = true
                } else if(newPet.hunger < 0){
                    newPet.hunger === 0
                } else if(newPet.hunger >= 30 && !alertShownDead){
                    newPet.hunger = 30
                    alert(`${petName} starved to death ☠️`)
                    alertShownDead = true
                    clearTimeout(endGame)
                    document.querySelector('.charizard').style.visibility = 'hidden'
                    document.querySelector('.deadPet').style.visibility = 'visible'
                }
                //Pet gets to bored
                if(newPet.play >= 10 && !alertShownBored){
                    newPet.play = 10
                    alert(`${petName} is getting bored, play with him before he gets depressed!`)
                    alertShownBored = true
                } else if(newPet.play < 0){
                    newPet.play === 0
                } else if(newPet.play >= 30 && !alertShownDead){
                    newPet.play = 30
                    alert(`${petName} got depressed and died ☠️`)
                    alertShownDead = true
                    clearTimeout(endGame)
                    document.querySelector('.charizard').style.visibility = 'hidden'
                    document.querySelector('.deadPet').style.visibility = 'visible'
                }
                //Pet gets too tired
                if(newPet.sleep >= 15 && !alertShownTired){
                    newPet.sleep = 15
                    alert(`${petName} is getting sleepy, let him take a nap before he gets insomnia!`)
                    alertShownTired = true
                } else if(newPet.sleep < 0){
                    newPet.sleep === 0
                } else if(newPet.sleep >= 30 && !alertShownDead){
                    newPet.sleep = 30
                    alert(`${petName} got insomnia and died ☠️`)
                    alertShownDead = true
                    clearTimeout(endGame)
                    document.querySelector('.charizard').style.visibility = 'hidden'
                    document.querySelector('.deadPet').style.visibility = 'visible'
                }
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
      
        
    }

  

    function petPlay (e){
        e.preventDefault()
        newPet.play--   
        console.log(`${newPet.name} has played and had so much fun! Boredom level = ${newPet.play}` ) 
        

    }

    

    function petSleep (e){
        e.preventDefault() 
        newPet.sleep--    
        console.log(`${newPet.name} has slept and feels refreshed! Fatigue level = ${newPet.sleep}` )
        
    }

    

   

    setTimeout(() => {
        alert(`${petName} is evolving into baby Charmander! `)
        document.querySelector('.egg').style.visibility = 'hidden'
        // let charmander = document.querySelector('.egg').src = 'js/images/toppng.com-okemon-charmander-png-high-quality-image-cute-charmander-1105x1061.png'
    }, 10000);

    setTimeout(() => {
        document.querySelector('.charmander').style.visibility = 'visible'
        // let charmander = document.querySelector('.egg').src = 'js/images/toppng.com-okemon-charmander-png-high-quality-image-cute-charmander-1105x1061.png'
    }, 10000);

    setTimeout(() => {
        alert(`${petName} is evolving into Charmeleon!`)
        document.querySelector('.charmander').style.visibility = 'hidden'
        // let charmander = document.querySelector('.egg').src = 'js/images/toppng.com-okemon-charmander-png-high-quality-image-cute-charmander-1105x1061.png'
    }, 25000);

    setTimeout(() => {
        
        document.querySelector('.charmeleon').style.visibility = 'visible'
        // let charmeleon = document.querySelector('.egg').src = 'js/images/pngegg (1).png'
    }, 25000);

    setTimeout(() => {
        alert(`${petName} is evolving to his final form, Charizard! 🔥🔥🔥🔥`)
        document.querySelector('.charmeleon').style.visibility = 'hidden'
        // let charmeleon = document.querySelector('.egg').src = 'js/images/pngegg (1).png'
    }, 43000);

    setTimeout(() => {
        
        document.querySelector('.charizard').style.visibility = 'visible'
        // let charizard = document.querySelector('.egg').src = 'js/images/pngegg (4).png'
    }, 43000);
    
    
    
    

//Buttons
    let feed = document.querySelector('.feed')
    let play = document.querySelector('.play')
    let sleep = document.querySelector('.sleep')
    
//Event Listeners
    feed.addEventListener('click', petFeed)
    play.addEventListener('click', petPlay)
    sleep.addEventListener('click', petSleep)
    sleep.addEventListener('click', () => {
        document.querySelector('.food').style.visibility = 'hidden'
        document.body.style.background = "url('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/204364595/original/86db6005cd51b4f60e71cca277f603a82cf5646a/draw-a-pixel-pokemon-battle-background.png')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.filter = "brightness(60%)"
    });
    play.addEventListener('click', () => {
        document.querySelector('.food').style.visibility = 'hidden'
        document.body.style.background = "url('https://preview.redd.it/d9spuwer2c491.png?width=1050&format=png&auto=webp&v=enabled&s=f6b6908ea6b25b4914c6aadce02a54ed064f4ae9')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.background.filter = 'opacity(80%)'
        document.body.style.filter = "brightness(100%)"
    })
    feed.addEventListener('click', () => {
        document.querySelector('.food').style.visibility = 'visible'
    })

})
