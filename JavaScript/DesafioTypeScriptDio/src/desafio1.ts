let funcionario = {
    codigo : 10,
    nome: 'Jhon'
};

let funcionario2: { codigo : number, nome: string } = {
    codigo: 10,
    nome: 'Jhon'
}

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario ={
    codigo: 200,
    nome: 'Jhon'
}