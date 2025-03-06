import Ember from "./Ember.js";

let articleELEM = document.querySelector("article")
const ember1 = new Ember("Jenő", 1977, 220, articleELEM) 
console.log(ember1.nev, ember1.magassag, ember1.szulido)

// console.log(ember1.getKor())

// console.log(ember1)

// ember1.setNev("Jolán")
// ember1.getNev()

// console.log(ember1)
// console.log(ember1.getNev())

