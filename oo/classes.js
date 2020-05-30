class Lancamento {
    constructor(nome= 'Genérico', valor=0){
        this.valor=valor;
        this.nome=nome;
    }

}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes=mes;
        this.ano=ano;
        this.lancamentos=[];
    }

    addLancamentos(...lancamentos){//concatena em uma array os parametros
        lancamentos.forEach(l => this.lancamentos.push(l));//para cada parametro adicionar no array lancamentos
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;//soma todos lancamentos
        })

        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
