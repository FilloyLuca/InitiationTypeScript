"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompteCourant {
    _numCompte;
    _solde;
    _limiteDecouvert;
    constructor(numCompte, solde, limiteDecouvert) {
        this._numCompte = numCompte;
        this._solde = solde;
        this._limiteDecouvert = limiteDecouvert;
    }
    get solde() {
        return this._solde;
    }
    crediter(montant) {
        this._solde += montant;
    }
    // debiter(montant: number): boolean {
    // if (montant >= this._limiteDecouvert) {
    //     this._solde -= montant
    //     return true
    // } else {
    //     return false
    // }
    // }
    debiter(montant) {
        if (this._solde - montant >= this._limiteDecouvert) {
            this._solde -= montant;
            console.log(`Débit effectué : ${montant}. Nouveau solde : ${this._solde}`);
            return true;
        }
        else {
            console.log("Débit refusé : solde insuffisant");
            return false;
        }
    }
}
// Création d'une instance
const compte1 = new CompteCourant(1, 500, -200);
// Test fonction crediter
// compte1.crediter(150)
// console.log(`solde du compte : ${compte1.solde}`)   // → 650
// Test fonction debiter
// compte1.debiter(1000)
//# sourceMappingURL=gestionBancaire.js.map