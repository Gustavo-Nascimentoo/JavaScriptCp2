// Cadastro
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

let email;

do{
    email = prompt("Digite seu email:").toLowerCase();
    if(!email || email.length < 3 || !email.includes(".com") || email.includes(" ")){
        alert("Digite um email válido");
    }
} while(!email || email.length < 3);

alert (`Cadastro efetuado com sucesso ${nome}, aproveite.`);
console.log(`Nome: ${nome}\nSenha: ${senha}\nEmail: ${email}`);