
var total = 0;

function criarBalao(){

    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 300);
    var y = Math.floor(Math.random() * 600);

    balao.setAttribute("style","left:" +x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(obeto){
    document.body.removeChild(obeto);

    total++;
    var score = document.getElementById("total");
    score.innerHTML = "Alvos abatidos: "+ total;
}

function carregarJogo(){
    setInterval(criarBalao, 1000);
}