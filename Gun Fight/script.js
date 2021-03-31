var ak47 = {nome:"AK-47",
            img:"https://as2.ftcdn.net/jpg/00/51/51/87/500_F_51518730_xRzC2fqZVddwUH4nhElyeLoyxfmunAFa.jpg",
            status:{Damage: 72, Pefuracao: 61}};

var m4a1 = {nome:"M4A1",
            img:"https://as2.ftcdn.net/jpg/02/30/49/51/500_F_230495122_gxDqqg2Q7KuZALli9rTu7NDZqdQ0Ekzl.jpg",
            status:{Damage: 68, Pefuracao: 53}};

var galil = {nome:"GALIL",
             img:"https://as1.ftcdn.net/jpg/03/67/10/66/500_F_367106690_d3M9CL22PVuYak6pqxazp6jMQlMJ7PHa.jpg",
             status:{Damage: 65, Pefuracao: 58}};

var armaJogador;
var armaMaquina;
var arma = [m4a1, ak47, galil];

function sortearArma() {
  var numeroArmaMaquina = parseInt(Math.random() * 3);
  armaMaquina = arma[numeroArmaMaquina];
  console.log(armaMaquina)
  
  var numeroArmaJogador = parseInt(Math.random() * 3);
  while(numeroArmaJogador == numeroArmaMaquina){
    numeroArmaJogador = parseInt(Math.random() * 3);
  }
  armaJogador = arma[numeroArmaJogador];
  console.log(armaJogador);
  
  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes');
  var opcoesTexto = "";
  for (var statu in armaJogador.status) {
    opcoesTexto += "<input type='radio' name='status' value='"+ statu +"'>" + statu;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemArmasNomeSelecionado() {
  var radioArmasNome = document.getElementsByName('status');
  for (var i = 0; i < radioArmasNome.length; i++) {
    if(radioArmasNome[i].checked) {
      console.log(radioArmasNome[i].value)
      return radioArmasNome[i].value;
    }
  }
}

function jogar() {
  var armasNomeSelecionado = obtemArmasNomeSelecionado();
  if(armaJogador.status[armasNomeSelecionado] > armaMaquina.status[armasNomeSelecionado]) {
    document.querySelector('#jogador').innerHTML = "<p>Jogador GANHOU!! SUA ARMA ERA ↓↓↓↓</p>";
    document.querySelector('#imgJogador').src = armaJogador.img;
    document.querySelector('#maquina').innerHTML = "<p>Maquina PERDEU!! SUA ARMA ERA ↓↓↓↓</p>";
    document.querySelector('#imgMaquina').src = armaMaquina.img;
    
  } else if (armaJogador.status[armasNomeSelecionado] < armaMaquina.status[armasNomeSelecionado]) {
    document.querySelector('#jogador').innerHTML = "<p>Jogador PERDEU!! SUA ARMA ERA ↓↓↓↓</p>";
    document.querySelector('#imgJogador').src = armaJogador.img;
    document.querySelector('#maquina').innerHTML = "<p>Maquina GANHOU!! SUA ARMA ERA ↓↓↓↓</p>";
    document.querySelector('#imgMaquina').src = armaMaquina.img;
    
  }
  
  document.getElementById('btnResetar').disabled = false;
}

function resetar() {
  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;
  opcoes.innerHTML = "";
  document.querySelector('#jogador').innerHTML = "";
  document.querySelector('#maquina').innerHTML = "";
  document.querySelector('#imgJogador').src = "";
  document.querySelector('#imgMaquina').src = "";
  document.getElementById('btnResetar').disabled = true
}
