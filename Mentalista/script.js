var secretNumber = parseInt(Math.random()*10); 
var life  = 3;

function tentar() {
  
  while(life > 0) {
    var number = document.querySelector('.chute').value;
    
    if (number == secretNumber) {
      document.querySelector('p').innerHTML = ("ACERTOOOOU!! VOCÊ GANHOU!");
      break;
    } else if (number > secretNumber) {
      life = life - 1;
      document.querySelector('p').innerHTML = ("ERROU! É UM NÚMERO MENOR");
      return;
    } else if (number < secretNumber) {
      life = life - 1;
      document.querySelector('p').innerHTML = ("ERROU! É UM NÚMERO MAIOR");
      return;
    }
  }
  
  if (number != secretNumber) {
    document.querySelector('p').innerHTML = ("ERROOOU!! O número certo era: "+ secretNumber);
  }
  
}