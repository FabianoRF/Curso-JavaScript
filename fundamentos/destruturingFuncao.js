function rand({min=0, max=1000}){
    
    const valor=Math.random() * (max-min) + min;

    return Math.floor(valor);
}

const obj={max: 40, min: 30}

console.log(rand(obj))

console.log
