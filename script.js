const botao = document.querySelector("#btnAlterar");
const nome = document.querySelector("#nome");
const situacao = document.querySelector("#situacao");
const imagem01 = document.querySelector("#img1");
// const imagem01 = document.querySelector("#img1");


botao.addEventListener("click", function () {
    if(botao.value == 'primeiro'){
        nome.innerText = "Isso!! Mas Cuidado pra ele não se apaixonar!"
        situacao.innerText = "Agora sim!!";
        img1.src="imagem03.png";
        botao.value = 'segundo';
    } else if(botao.value == 'segundo'){
        nome.innerText = "Ta gamadinho em você, agora todo cuidado é pouco, ele é bem frágil";
        situacao.innerText = "Gamou em Você!!";
        img1.src="imagem02.png";
        botao.value = 'terceiro';
    } else if(botao.value == 'terceiro'){
        nome.innerText = "Tente alegrar o nosso abacate!";
        situacao.innerText = "Ta Jururu!!";
        img1.src="imagem01.png";
        botao.value = 'primeiro';
    }
})