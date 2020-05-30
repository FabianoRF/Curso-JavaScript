const obj={}

obj.nome='Celular top'
obj.idade=334;
obj['sobrenome']='fafa';//evitar atributos com espaço     

obj.categoria={
    name:'lala',
    tipo:'ter',
    cod:1123
}

console.log(obj);

const prod2={
    nome: 'camisapolo',
    preco:'323',
    obj:{
        blabla:1,
        obj2:{
            lala:223
        }
    }
}

console.log(prod2);