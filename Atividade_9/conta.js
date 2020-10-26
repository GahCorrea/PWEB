function conta() {
    var nomeCorrentista;
    var banco;
    var numConta;
    var saldo;

    this.setNomeCorrentista = function (nc) {
        nomeCorrentista = nc;
    }
    this.setBanco = function (bc) {
        banco = bc;
    }
    this.setNumConta = function (num) {
        numConta = num;
    }
    this.setSaldo = function (sd) {
        saldo = sd;
    }

    this.getNomeCorrentista = function () {
        return nomeCorrentista;
    }
    this.getBanco = function () {
        return banco;
    }
    this.getNumConta = function () {
        return numConta;
    }
    this.getSaldo = function () {
        return saldo;
    }
}

function corrente() {
    var saldoEspecial;

    this.setSladoEspecial = function (se) {
        saldoEspecial = se;
    }

    this.getSaldoEspecial = function () {
        return saldoEspecial;
    }
}

function poupanca() {
    var juros;
    var dtVencimentos;

    this.setJuros = function (jr) {
        juros = jr;
    }
    this.setDtVencimento = function (dtv) {
        dtVencimentos = dtv;
    }

    this.getJuros = function () {
        return juros;
    }
    this.getDtVencimentos = function () {
        return dtVencimentos;
    }
}

corrente.prototype = new conta();
poupanca.prototype = new conta();

vContaCorrente = new corrente();
vContaPoupanca = new poupanca();

//ContaCorrente
vContaCorrente.setNomeCorrentista("Renan Silva");
vContaCorrente.setBanco(15);
vContaCorrente.setNumConta(23568);
vContaCorrente.setSaldo(36852);
vContaCorrente.setSladoEspecial(150000);

alert("Conta Corrente \nNome do Correntista: " + vContaCorrente.getNomeCorrentista() + "\nBanco: " + vContaCorrente.getBanco() + "\nNúmero da Conta: " + vContaCorrente.getNumConta() + "\nSaldo: R$ " + vContaCorrente.getSaldo() + "\nSaldo Especial: R$ " + vContaCorrente.getSaldoEspecial());

//Conta Poupança
vContaPoupanca.setNomeCorrentista("Isadora Coelho");
vContaPoupanca.setBanco(24);
vContaPoupanca.setNumConta(21587);
vContaPoupanca.setSaldo(985687);
vContaPoupanca.setJuros(15);
vContaPoupanca.setDtVencimento("24/12/2055");

alert("Conta Poupança \nNome do Correntista: " + vContaPoupanca.getNomeCorrentista() + "\nBanco: " + vContaPoupanca.getBanco() + "\nNúmero da Conta: " + vContaPoupanca.getNumConta() + "\nSaldo: R$ " + vContaPoupanca.getSaldo() + "\nJuros: " + vContaPoupanca.getJuros() + "%\nData de Vencimento: " + vContaPoupanca.getDtVencimentos());
