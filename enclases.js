let index = 1
let weight = 100 
let Heigth = 100

let div = document.createElement("div")
document.body.appendChild(div)
div.style.padding= "40px"
let contador = document.createElement("h1")
div.appendChild(contador)

contador.style.padding = "4px"
contador.style.background = "tomato"
contador.style.color="white"
contador.style.position="fixed"
contador.style.right="40px"
contador.style.bottom="40px"

function kittenName(weight,Heigth){
   return  `http://placekitten.com/${weight}/${Heigth}`
}

let interval = setInterval(() => { 
    index ++
    Heigth++
    weight++
    let gatitos = document.createElement("img")
    document.body.appendChild(gatitos)
    gatitos.src= kittenName(weight,Heigth)
    contador.innerText = index
    console.log(index)
    if (index ==200)
    clearInterval(interval)
}, 100);


