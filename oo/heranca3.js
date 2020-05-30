const pai={
    nome: 'Pedro',
    corCabelo: 'preto'
};

const filha1= Object.create(pai);//cria um objeto nov tendo pai como prototipo
filha1.nome= 'Ana';

console.log(filha1.corCabelo);

const filha2= Object.create(pai, {
    nome: {value: 'Bia', writable:false, enumerable: true }//nao pode ser editado ou seja é final e permite ser listado
});

console.log(filha2.nome)
filha2.nome='Carla'

console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);//verifica se pertence ao objeto ou veio por herança
}


