//coleção dinamica de chaves/valor
const produto=new Object

produto.nome='Cadeira';

produto['marca do produto']= 'Generica'

produto.preco=100

console.log(produto);
delete produto.preco;
delete produto['marca do produto']

console.log(produto);

const carro={
    prop:'João',
    valor:3000,
    endereco:{
        rua:'rua',
        n:45,
        logradouro: 21
    },

    condutores: [{
        nome:'junior',
        idade:34,
    }, {
        nome:'ana',
        idade:12
    }],

    calcularValorSeguro: function(valor){
        //...
    }

}

carro.endereco.n=1000
carro['endereco']['logradouro']=00

console.log(carro)

delete carro.condutores

console.log(carro)