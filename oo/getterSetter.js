const sequencia={
    _valor:1,

    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor){
            this._valor=valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)//dando um get
sequencia.valor=1000
console.log(sequencia.valor, sequencia.valor)//dando um set
sequencia.valor=900
console.log(sequencia.valor, sequencia.valor)
