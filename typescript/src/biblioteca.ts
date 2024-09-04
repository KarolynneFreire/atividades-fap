class Pessoa {
    constructor(
        public nome: string,
        public idade: number,
        public cpf: string
    ) {}

    public apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Cliente extends Pessoa {
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        public clienteDesde: Date
    ) {
        super(nome, idade, cpf);
    }

    public detalhesCliente(): string {
        return `${this.apresentar()} Sou cliente desde ${this.clienteDesde.toLocaleDateString()}.`;
    }
}

class Funcionario extends Pessoa {
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        public cargo: string,
        public salario: number
    ) {
        super(nome, idade, cpf);
    }

    public detalhesFuncionario(): string {
        return `${this.apresentar()} Trabalho como ${this.cargo} e ganho R$${this.salario}.`;
    }
}

class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public isbn: string,
        public dataPublicacao: Date,
        public disponivel: boolean
    ) {}

    public detalhesLivro(): string {
        return `${this.titulo} por ${this.autor}, ISBN: ${this.isbn}. Publicado em ${this.dataPublicacao.toLocaleDateString()}. Disponível: ${this.disponivel ? 'Sim' : 'Não'}`;
    }
}


const cliente = new Cliente("João", 30, "123.456.789-00", new Date(2015, 6, 15));
const funcionario = new Funcionario("Susan", 23, "987.654.321-00", "Desenvolvedora", 5000);
const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "978-0544003415", new Date(1954, 7, 29), true);

console.log(cliente.detalhesCliente());
console.log(funcionario.detalhesFuncionario());
console.log(livro.detalhesLivro());
