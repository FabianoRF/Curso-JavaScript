//Object.precntExtensions (previne que possa aumentar a qtd de atributos do obj, excluir pode)

const produto=Object.preventExtensions({
    nome: 'Quaquer', preco:1.99, tag:'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome='Borracha';
produto.descricao= 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal (não deixa adicionar e nem excluir atributos, porem pode modificar)

const pessoa ={nome:'juliana', idade: 15}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

//Object.freeze (selado + valores constantes)