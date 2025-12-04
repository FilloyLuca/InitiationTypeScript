class CompteCourant {
    _numCompte: number
    private _solde: number
    _limiteDecouvert: number

    constructor(numCompte:number,solde:number,limiteDecouvert:number) {
        this._numCompte = numCompte
        this._solde = solde
        this._limiteDecouvert = limiteDecouvert
    }

    get solde() {
        return this._solde
    }

    

}