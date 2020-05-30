//novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade:'5',
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

//desustruturando
const {idade, endereco} = pessoa;

console.log(idade, endereco);

const {nome: n, idade: i} = pessoa;//desustruturando e renomeando
console.log(n,i);

const {endereco:{logradouro, numero, cep}} = pessoa

console.log(logradouro, numero,cep)