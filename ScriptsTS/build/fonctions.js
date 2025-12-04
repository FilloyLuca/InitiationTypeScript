"use strict";
// Définition des fonctions
Object.defineProperty(exports, "__esModule", { value: true });
// Les fonctions régulières 
//Définition de la fonction somme
// function somme(a: number,b:number):void{
//     console.log(`${a} + ${b} = {a + b}`)
// }
// Version2 qui retourne la somme
// function somme(a: number,b:number):number{
//     return a + b
// }
// Les fonctions anonymes
// let somme = function (a:number, b:number):number{
//     return a + b 
// }
// Les fonctions fléchées
let somme = (a, b) => {
    return a + b;
};
// Appels 
//fonctions régulières 
// Version 1
// somme(2,3)
// Version 2
// console.log(`2 + 3 = ${somme(2,3)}`)
// fonction anonyme
// console.log(`2 + 3 = ${somme(2,3)}`)
// fonction fléchée
console.log(`2 + 3 = ${somme(2, 3)}`);
//# sourceMappingURL=fonctions.js.map