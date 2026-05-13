let login = prompt("Digite seu login:");
let senha = prompt("Digite sua senha:");

login.trim()

if(login === "" || senha === ""){
    alert("Digite alguma coisa!");
}

if(senha.length < 8){
    alert("Senha não atende aos critérios")
}

if (login === "1234" && senha === "1234"){
    alert("Login efetuado com sucesso!");
    window.location.href="home.html";
}
else {
    alert("Usuário ou senha incorretos!");
}

//let nome = "Gustavo";
//console.log(nome.length)

//if(login.toLowerCase().includes("@")){
//}

// ! "significa não"
// console.log(nome.replace("a", "o"))
//numero1.tofixed(2)
//isNaN(valor)

//Math.random() aleatorio de 0 à 0.99999
//Math.floor(Math.floor() * 7) para arrendondar para inteiro "+1" caso queira que start no 1
//se vc quiser de 0 a 6 Math.random coloque 1 a cima do normal Math.random * 7
//Math.floor() arredonda pra baixo
//Math.ceil() arredonda pra cima
//Math.round() arredonda