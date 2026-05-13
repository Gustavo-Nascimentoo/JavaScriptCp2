// login
let nome;

do{
    nome = prompt("Digite seu nome de usuário:").toLowerCase();
    if(!nome || nome.length < 3){
        alert("Digite um nome usuário válido");
    }
} while(!nome || nome.length < 3);

let senha;

do{
    senha = prompt("Digite sua senha:");
    if(!senha || senha.length < 8){
        alert("Digite uma senha válida");
    }
} while(!senha || senha.length < 8);

alert (`Login efetuado, aproveite ${nome}`);
console.log(nome, senha);