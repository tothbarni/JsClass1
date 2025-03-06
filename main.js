import Ember from "./Ember.js";
import { EMBEREKLISTA } from "./adat.js";

let articleELEM = document.querySelector("article");

for (let index = 0; index < EMBEREKLISTA.length; index++) {
    const EMBER = new Ember(EMBEREKLISTA[index].nev, EMBEREKLISTA[index].szulIdo, EMBEREKLISTA[index].magassag, articleELEM)
    
}
const ember1 = new Ember("Jenő", 1977, 220, articleELEM);

// console.log(ember1.getKor())

// console.log(ember1)

// ember1.setNev("Jolán")
// ember1.getNev()

// console.log(ember1)
// console.log(ember1.getNev())