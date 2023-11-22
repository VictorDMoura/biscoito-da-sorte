import { luckPhrase } from "./luck-cookie.js";

const img = document.querySelector(".screen1 .image")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const card = document.querySelector(".card h3")
const btn = document.querySelector("button")




img.addEventListener('click', openCookie)

btn.addEventListener('click', closeCookie)

function closeCookie() {
    screen2.classList.add('hide')
    screen1.classList.remove('hide')
}

function openCookie(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    card.textContent  = randomMessage()
    
}



function randomMessage(){
    const randomNumber = Math.floor(Math.random()*luckPhrase.length)
    return luckPhrase[randomNumber]
}