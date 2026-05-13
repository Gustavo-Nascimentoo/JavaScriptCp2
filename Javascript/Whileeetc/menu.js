//Menu
alert (`Bem vindo ao site, tenha uma boa estadia.`);

const imagens = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
];

let index = 0;

function trocarImagem(){

  index++;

  if(index >= imagens.length){
    index = 0;
  }

  document.getElementById("slide").src =
    imagens[index];
}
