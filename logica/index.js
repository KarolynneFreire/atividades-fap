// let valorConvertido; 
// let cotacaoAtual = Number(prompt('Digite a cotação do dolar atual: ')); //Number
// let carteira = Number(prompt('Digite o valor que quer converter em reais: '));
// let opcao = Number(prompt('Escolha uma opção: \n1 - Real -> Dolar \n2 - Dolar -> Real'));

// if (opcao == 1) {
//     valorConvertido = carteira / cotacaoAtual;
//    alert("O valor convertido de Real para Dolar é " + valorConvertido);
// } else {
//     valorConvertido = cotacaoAtual * carteira;
//     alert("O valor convertido de Dolar para Real é " + valorConvertido);  
// }
//alert(valorConvertido);


// let numero = Number(prompt('Digite um numero: '));

// if (numero%2 == 0) {
//     document.write('Par')  
// } else {
//     document.write('Impar')
// }

// let numero1 = Number(prompt('Digite o primeiro número: '));
// let numero2 = Number(prompt('Digite osegundo número: '));

// if (numero1 > numero2) {
//     document.write('O número 1 é maior'); 
// } else if(numero2 > numero1){
//     document.write('O número 2 é maior');
// }else{
//     document.write('Os números são iguais');
// }

// let nota1 = Number(prompt('Digite a primeira nota: '));
// let nota2 = Number(prompt('Digite a segundo nota: '));

// if (nota1 >= 6) {
//     document.write('Aluno aprovado na primeira prova; ' ,'<br>');
   
// } else {
//     document.write('Aluno reprovado a primeira prova; ' ,'<br>');
// }

// if (nota2 >= 6) {
//     document.write('Aluno aprovado na segunda prova; ');
// } else {
//     document.write('Aluno reprovado a segunda prova; ');
// }



// let ingresso = prompt("Digite o tipo de ingresso (1 para VIP, 2 para standard):");

// if (ingresso !== '1' && ingresso !== '2') {
//     alert("Opção de ingresso inválida. Por favor, digite 1 para VIP ou 2 para standard.");
// } else {

//     let combo = prompt("Deseja o combo de pipoca e refrigerante? (1 para Sim, 2 para Não):");

//     if (combo !== '1' && combo !== '2') {
//         alert("Opção de combo inválida. Por favor, digite 1 para Sim ou 2 para Não.");
//     } else {
        
//         let valor;

//         if (ingresso === '1') { 
//             if (combo === '1') {
//                 valor = 110;
//             } else {
//                 valor = 80;
//             }
//         } else if (ingresso === '2') { 
//             if (combo === '1') {
//                 valor = 70; 
//             } else {
//                 valor = 40; 
//             }
//         }
//         alert("Valor: " + valor + " reais");
//     }
// }

// let opcao = prompt(
//     "Bem-vindo ao Chat!\n" +
//     "Escolha uma opção:\n" +
//     "1. Saber mais sobre o nosso serviço\n" +
//     "2. Ver nossos produtos\n" +
//     "3. Falar com um atendente\n" +
//     "Digite o número da opção desejada:"
// );

// let continuar = true;


// while (continuar) {
//     if (opcao === '1') {
//         let subOpcao = prompt(
//             "Você escolheu saber mais sobre o nosso serviço.\n" +
//             "Escolha uma opção:\n" +
//             "1. Horários de funcionamento\n" +
//             "2. Localização\n" +
//             "Digite o número da opção desejada:"
//         );

//         if (subOpcao === '1') {
//             alert("Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h.");
//             continuar = false;
//         } else if (subOpcao === '2') {
//             alert("Estamos localizados na Rua Exemplo, 123, Centro.");
//             continuar = false;
//         } else {
//             alert("Opção inválida. Voltando ao menu principal.");
//             opcao = prompt(
//                 "Bem-vindo ao Chat!\n" +
//                 "Escolha uma opção:\n" +
//                 "1. Saber mais sobre o nosso serviço\n" +
//                 "2. Ver nossos produtos\n" +
//                 "3. Falar com um atendente\n" +
//                 "Digite o número da opção desejada:"
//             );
//         }
//     } else if (opcao === '2') {
//         let subOpcao = prompt(
//             "Você escolheu ver nossos produtos.\n" +
//             "Escolha uma opção:\n" +
//             "1. Produtos em promoção\n" +
//             "2. Novidades\n" +
//             "Digite o número da opção desejada:"
//         );

//         if (subOpcao === '1') {
//             alert("Temos vários produtos em promoção. Visite nosso site para mais detalhes.");
//             continuar = false;
//         } else if (subOpcao === '2') {
//             alert("Confira as novidades em nossa loja online.");
//             continuar = false;
//         } else {
//             alert("Opção inválida. Voltando ao menu principal.");
//             opcao = prompt(
//                 "Bem-vindo ao Chat!\n" +
//                 "Escolha uma opção:\n" +
//                 "1. Saber mais sobre o nosso serviço\n" +
//                 "2. Ver nossos produtos\n" +
//                 "3. Falar com um atendente\n" +
//                 "Digite o número da opção desejada:"
//             );
//         }
//     } else if (opcao === '3') {
//         let subOpcao = prompt(
//             "Você escolheu falar com um atendente.\n" +
//             "Escolha uma opção:\n" +
//             "1. Suporte técnico\n" +
//             "2. Dúvidas sobre pedidos\n" +
//             "Digite o número da opção desejada:"
//         );

//         if (subOpcao === '1') {
//             alert("Nosso suporte técnico está disponível 24 horas pelo telefone 0800-123-456.");
//             continuar = false;
//         } else if (subOpcao === '2') {
//             alert("Para dúvidas sobre pedidos, envie um e-mail para pedidos@exemplo.com.");
//             continuar = false;
//         } else {
//             alert("Opção inválida. Voltando ao menu principal.");
//             opcao = prompt(
//                 "Bem-vindo ao Chat!\n" +
//                 "Escolha uma opção:\n" +
//                 "1. Saber mais sobre o nosso serviço\n" +
//                 "2. Ver nossos produtos\n" +
//                 "3. Falar com um atendente\n" +
//                 "Digite o número da opção desejada:"
//             );
//         }
//     } else {
//         alert("Opção inválida. Por favor, escolha uma das opções do menu.");
//         opcao = prompt(
//             "Bem-vindo ao Chat!\n" +
//             "Escolha uma opção:\n" +
//             "1. Saber mais sobre o nosso serviço\n" +
//             "2. Ver nossos produtos\n" +
//             "3. Falar com um atendente\n" +
//             "Digite o número da opção desejada:"
//         );
//     }
// }
// alert("O chat será encerrado. Obrigado por utilizar nossos serviços!");


// let horasTrabalhadasNoMes = Number(prompt("Digite o número de horas trabalhadas no mês:"));
// let salarioPorHora = Number(prompt("Digite o salário por hora:"));


// const horasPorSemana = 40;
// const semanasPorMes = 4;
// const horasNormaisNoMes = horasPorSemana * semanasPorMes;
// const taxaHoraExtra = 1.5; 
// let salarioTotal;

// if (horasTrabalhadasNoMes > horasNormaisNoMes) {
//     let horasExtras = horasTrabalhadasNoMes - horasNormaisNoMes;
//     let pagamentoHorasExtras = horasExtras * salarioPorHora * taxaHoraExtra;
//     let pagamentoHorasNormais = horasNormaisNoMes * salarioPorHora;
//     salarioTotal = pagamentoHorasNormais + pagamentoHorasExtras;
// } else {
//     salarioTotal = horasTrabalhadasNoMes * salarioPorHora;
// }

// alert("O salário total do funcionário é: R$" + salarioTotal.toFixed(2));


function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida!";
    }
    return a / b;
}


function calculadora() {
    let continuar = true;

    while (continuar) {
        let numero1 = Number(prompt("Digite o primeiro número:"));
        let numero2 = Number(prompt("Digite o segundo número:"));

        let operacao = prompt(
            "Escolha a operação:\n" +
            "1. Soma (+)\n" +
            "2. Subtração (-)\n" +
            "3. Multiplicação (*)\n" +
            "4. Divisão (/)\n" +
            "Digite o número da operação desejada:"
        );

        let resultado;

        switch (operacao) {
            case '1':
                resultado = soma(numero1, numero2);
                break;
            case '2':
                resultado = subtracao(numero1, numero2);
                break;
            case '3':
                resultado = multiplicacao(numero1, numero2);
                break;
            case '4':
                resultado = divisao(numero1, numero2);
                break;
            default:
                resultado = "Operação inválida!";
        }

        alert("Resultado: " + resultado);

        let resposta = prompt("Deseja realizar outra operação? (sim/não):").toLowerCase();

        if (resposta !== 'sim') {
            continuar = false;
        } 
    }

    alert("Calculadora encerrada.");
}

calculadora();


