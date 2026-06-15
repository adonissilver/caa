const mensagem=document.getElementById("mensagem");

const agua=document.getElementById("agua");

const banheiro=document.getElementById("banheiro");

const dor=document.getElementById("dor");



agua.addEventListener("click", () => {
    mensagem.value="Quero agua. ";
});



banheiro.addEventListener("click",() => {
    mensagem.value="Preciso ir ao banheiro ";
});


dor.addEventListener("click",() =>{
    mensagem.value="Estou com dor";
});