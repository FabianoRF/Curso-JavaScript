Number.prototype.entre= function(inicio, fim){
    return this >= inicio && this <=fim
}

var imprimirResultado=function(nota){

    if(nota.entre(0, 20)){
        console.log('oi')
    }else if(nota.entre(20, 40)){
        console.log('lala')
    }else if(nota.entre(40, 60)){
        console.log('lele')
    }
}

imprimirResultado(10)
imprimirResultado(25)
imprimirResultado(50)