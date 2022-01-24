class Finance {

    constructor(n, jurosMensal, pagamentoMensal) {
        this.n = n;
        this.jurosMensal = jurosMensal;
        this.pagamentoMensal = pagamentoMensal;
        this.valorFinal = 0;
    }

    calcularValorFinal() {
        console.log(this.n, this.jurosMensal, this.pagamentoMensal, this.valorFinal);
        for (let i = 1; i <= this.n; i++) {
            this.valorFinal = (this.valorFinal + this.pagamentoMensal) * (1 + this.jurosMensal);
            console.log(`${i} - ${this.valorFinal}`);

            if(i == this.n) {
                console.log(`Você estará ganhando por mês de juros, após ${this.n} meses: R$ ${(this.valorFinal * (this.jurosMensal)).toFixed(2)}`);
            }
        }

        return `Total de: R$ ${this.valorFinal.toFixed(2)}.`;
    }

}

const financa = new Finance(120, 0.008, 40000);
console.log(financa.calcularValorFinal())