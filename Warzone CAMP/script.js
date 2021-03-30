var ninext = {team: "Ninext", wins: 0, kills: 0, points: 0};
var tonyboy = {team: "Tonyboy", wins: 0, kills: 0, points: 0};
var zigueira = {team: "Zigueira", wins: 0, kills: 0, points: 0};
var stolen = {team: "Stolen", wins: 0, kills: 0, points: 0};
var gepege = {team: "Gepege", wins: 0, kills: 0, points: 0};

ninext.points = calculaPontos(ninext);
tonyboy.points = calculaPontos(tonyboy);
zigueira.points = calculaPontos(zigueira);
stolen.points = calculaPontos(stolen);
gepege.points = calculaPontos(gepege);

function calculaPontos(jogador) {
  var pontos = (jogador.wins * 25) + jogador.kills;
  return pontos;
}

function addTeam() {
  var nome = document.querySelector("#novoTime").value;
  var novoTime = {team: nome, wins: 0, kills: 0, points: 0};
  console.log(nome);
  console.log(novoTime);
  jogadores.push(novoTime);
  exibirJogadoresNaTela(jogadores);
  nome.value = "";
}

var jogadores = [ninext, tonyboy, zigueira, stolen, gepege];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for(var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>"+ jogadores[i].team +"</td>"
    html += "<td>"+ jogadores[i].wins +"</td>"
    html += "<td>"+ jogadores[i].kills +"</td>"
    html += "<td>"+ jogadores[i].pontos +"</td>"
    html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html += "<td><input type='number' id='nKills"+ i +"' placeholder='Kills in Game:'/></td>"
    html += "<td><button onClick='somarKills("+ i +")'>Somar</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.wins++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}


function somarKills(i) {
  var jogador = jogadores[i];
  var numeroKills = document.querySelector('#nKills'+ i).value;
  jogador.kills += parseInt(numeroKills);
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}