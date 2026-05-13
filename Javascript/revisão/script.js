// let nome = prompt("Qual é o seu nome?");
// let idade = prompt("Qua é a sua idade?");
// let curso = prompt("Qual o seu curso");
// alert(`Olá meu nome é ${nome}, tenho ${idade} e estudo ${curso} na fiap`);

// // ENTRADA
// let distancia = prompt("Qual distancia você quer converter?")
// // PROCESSAMENTO
// let centimetros = distancia * 100
// // SAIDA
// alert(`A distancia de ${distancia} metros é ${centimetros} centimetros`)

// let peso = Number(prompt("Qual o seu peso?"));
// let altura = Number(prompt("Qual a sua altura?"));
// imc = peso/(altura**2);
// alert(`Seu imc é ${imc.toFixed(2)}`);

//ENTRADA
let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite um outro número:"));
let operacao = prompt("Qual operação você deseja fazer? (+,-,/,*)");
//VALIDAÇÃO
if(n1 === "" || n2 === "" || operacao === ""){
    alert(`Digite alguma coisa`);
}
if(n1 === null || n2 === null || operacao === null){
    alert(`Precisa de alguma coisa`);
}
if(isNaN(n1) || isNaN(n2)){
    alert(`Digite direito`);
}
//PROCESSAMENTO
if(operacao === "+"){
    let total = n1 + n2;
    alert(`O total da soma de ${n1} e ${n2} é ${total.toFixed(2)}`);
}
else if(operacao === "-"){
    
    let total = n1 - n2;
    alert(`A subtração de ${n1} e ${n2} é ${total.toFixed(2)}`);
}
else if(operacao === "/");
    if(n2 !== 0){
        let total = n1 / n2;
    alert(`A divisão de ${n1} e ${n2} é ${total.toFixed(2)}`);
    }  
    else{
        alert(`Não é possível dividir por 0`);
    }
else if(operacao === "*"){
    let total = n1 * n2;
    alert(`A multiplicação de ${n1} e ${n2} é ${total.toFixed(2)}`);
}
else{
    alert(`ainda não rola!`);
}