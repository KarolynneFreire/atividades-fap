import * as readlineSync from 'readline-sync';

// let numero: number = Number(readlineSync.question('Digite um número: '));
// if (numero % 2 === 0) {
//   console.log('Par');
// } else {
//   console.log('Ímpar');
// }

// let numero1: number = Number(readlineSync.question('Digite o primeiro número: '));
// let numero2: number = Number(readlineSync.question('Digite o segundo número: '));

// if (numero1 > numero2) {
//   console.log('O primeiro numero é maior'); 
// } else if(numero2 > numero1){
//   console.log('O segundo numero 2 é maior');
// }else{
//   console.log('Os números são iguais');
// }


// let nota1: number = Number(readlineSync.question('Digite o primeiro número: '));
// let nota2: number = Number(readlineSync.question('Digite o primeiro número: '));

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



let ingresso: string = readlineSync.question('Digite o tipo de ingresso (1 para VIP, 2 para standard): ');

if (ingresso !== '1' && ingresso !== '2') {
    console.log('Opção de ingresso inválida. Por favor, digite 1 para VIP ou 2 para standard.');
} else {

    let combo: string = readlineSync.question('Deseja o combo de pipoca e refrigerante? (1 para Sim, 2 para Não): ');

    if (combo !== '1' && combo !== '2') {
        console.log('Opção de combo inválida. Por favor, digite 1 para Sim ou 2 para Não.');
    } else {
        
        let valor: number;

        if (ingresso === '1') { 
            valor = (combo === '1') ? 110 : 80;
        } else if (ingresso === '2') { 
            valor = (combo === '1') ? 70 : 40;
        }
        
        console.log('Valor: ' + valor + ' reais');
    }
}


