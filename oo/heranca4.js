function meuObjeto(){//toda função possui um objeto prototype

}

console.log(meuObjeto.prototype)

const obj1=new meuObjeto
const obj2=new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)//o pai dos dois são iguais

meuObjeto.prototype.nome='Anônimo';//adicionando atributos ao prototype da função
meuObjeto.prototype.falar= function(){
    console.log(`Bom dia! Meu nome é ${this.falar.nome}`)
}

obj1.falar()

obj2.nome='Rafael'
obj2.falar()

console.log(meuObjeto.prototype)