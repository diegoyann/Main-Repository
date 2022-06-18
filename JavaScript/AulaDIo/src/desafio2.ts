// Como podemos melhorar o esse código usando TS? 


enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome : string,
    idade : number,
    profissao : Profissao

}

let pessoa1 : Pessoa = {
    nome : "maria",
    idade : 29,
    profissao : Profissao.Atriz 
};


let pessoa2 : Pessoa = {
    nome : "roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
