function Aula(nome, videoID){
    this.nome=nome
    this.videoID= videoID
}

const aula1= new Aula('Bem Vindo', 123);
const aula2= new Aula('Até Breve', 456);

console.log(aula1, aula2);

//simulando o operador new

function novo(f, ...params){//operador spread rebe varios parametros e concatena
    const obj={}//cria um obj vazio
    obj.__proto__ = f.prototype; // diz que o pai do obj é o f
    f.apply(obj, params);//aplica os atributos do parametro no obj
    return obj;
}

const aula3 =  novo(Aula, 'Bem vindo', 123);

const aula4 = novo(Aula, 'Até Breve', 343)

console.log(aula3, aula4);