var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa.prototype.apresentar = function () {
        return "Meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, idade, cpf, clienteDesde) {
        var _this = _super.call(this, nome, idade, cpf) || this;
        _this.clienteDesde = clienteDesde;
        return _this;
    }
    Cliente.prototype.detalhesCliente = function () {
        return "".concat(this.apresentar(), " Sou cliente desde ").concat(this.clienteDesde.toLocaleDateString(), ".");
    };
    return Cliente;
}(Pessoa));
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, idade, cpf, cargo, salario) {
        var _this = _super.call(this, nome, idade, cpf) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    Funcionario.prototype.detalhesFuncionario = function () {
        return "".concat(this.apresentar(), " Trabalho como ").concat(this.cargo, " e ganho R$").concat(this.salario, ".");
    };
    return Funcionario;
}(Pessoa));
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, isbn, dataPublicacao, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.dataPublicacao = dataPublicacao;
        this.disponivel = disponivel;
    }
    Livro.prototype.detalhesLivro = function () {
        return "".concat(this.titulo, " por ").concat(this.autor, ", ISBN: ").concat(this.isbn, ". Publicado em ").concat(this.dataPublicacao.toLocaleDateString(), ". Dispon\u00EDvel: ").concat(this.disponivel ? 'Sim' : 'Não');
    };
    return Livro;
}());
var cliente = new Cliente("João", 30, "123.456.789-00", new Date(2015, 6, 15));
var funcionario = new Funcionario("Susan", 23, "987.654.321-00", "Desenvolvedora", 5000);
var livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "978-0544003415", new Date(1954, 7, 29), true);
console.log(cliente.detalhesCliente());
console.log(funcionario.detalhesFuncionario());
console.log(livro.detalhesLivro());
