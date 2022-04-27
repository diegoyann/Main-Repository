class ContaBancaria {
 constructor(agencia,numero,tipo){
     this.agencia = agencia;
     this.numero = numero;
     this.tipo = tipo;
     this._saldo = 0;

 }
 get saldo(){
     return this._saldo;
 }
 set saldo (valor){
     this.saldo = valor;
 }
 
sacar(valor){
    if(valor > this._saldo){
        return "Operação negada por falta de saldo"
    
    }
    this.saldo = this._saldo - valor;
    return this._saldo;
}

depositar(valor){
    this._saldo = this.saldo + valor;
    return this._saldo;

}
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero, cartaoCredito){
        super(agencia,numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
        
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'poupanca';
               
    }
  
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'universitaria';
               
    }
  sacar(valor){
      if(valor > 500){
          return 'Operação Negada!'
      }
      this._saldo = this._saldo; - valor
  }
}
