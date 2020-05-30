const pessoa={
    nome:'Rebeca',
    idade: 18,
    peso:13,
    pais: {
        pai: 'joao',
        mae: 'maria'
    }
}

console.log(Object.keys(pessoa))//retorna as chaves
console.log(Object.values(pessoa))//retorna as pessoas
console.log(Object.entries(pessoa))//retorna um array com arrays de chave valor do obj

Object.entries(pessoa).forEach(element => {//usando foreach
    console.log(`${element[0]}: ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {//foreach com detructuring
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento', {//definindo propridades no objeto Parametros: obj, nome e um obj com as regras
    enumerable: true,//pode ser enumerada
    writable: false, //pode ser editada
    value:'01/01/2019'//valor
});

pessoa.dataDeNascimento= '01/1'//não funcionará

console.log(pessoa)

//Object.assign (ECMA 15) concatena objs

const dest={a: 1}
const o1={b:2}
const o2={ c:3, a:4}
const obj=Object.assign(dest, o1, o2);//une todos os parametros ao primero obj que é de destino

console.log(obj)