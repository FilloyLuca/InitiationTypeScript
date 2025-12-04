// le ; n'est pas obligatoire 
// Les collections :

// Les Array
// Déclaration d'un tableau vide  de number 
let tableauVide_1: number[] = []
let tableauVide_2: Array<number> = []

// Déclaration  d'un tableau vide de number et string 
let tableauNumVide_1: (number | string)[] = []
let tableauNumVide_2: Array<number | string> = []

// Déclaration d'un tableau avec des éléments initiaux 
let tabInitNumber = [0,1,2,3,]
let tabInitMixte = ["0",1,"2"]
let tabDefInit: Array<string | number> = [1,"2"]

// Déclaration d'un tableau de tableaux
let matrice: number[][] = [[0,1,2],[10,11,12],[20,21,22]]

// Tableau initialisé avec des élements vides 
let tableauTailleFixe: number[] = new Array<number>(5)


// Les Maps
// Déclaration d'une map vide 
let mapVide: Map<string,string> = new Map<string,string>()

// Déclaration d'une Map avec des élements initiaux
let mapInit: Map<string,string> = new Map<string,string>([
    ["nom","Bob"],
    ["age","27"],
    ["ville","Lyon"]
])


// Les Sets
// Déclaration d'un set vide 
let ensemble:  Set<string | number> = new Set<string | number>()

// Déclaration et initialisation  d'un set 
let ensembleMixte: Set <string | number> = new Set<string | number>([1,"deux",3,"quatre"])