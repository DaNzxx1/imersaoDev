var allGames = {
    FPS: ["https://m.media-amazon.com/images/M/MV5BYmZhMDU1MGItMjBlMS00MDNhLWI2ODUtYjI4YzQwZGZjZGFjXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BYjg3MTYxZGEtNTU0NC00YzlhLWFjN2EtY2Y1ZTVjZTkxZmI2XkEyXkFqcGdeQXVyMTE0MTMxNDUz._V1_UY268_CR124,0,182,268_AL_.jpg",
             "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_UX182_CR0,0,182,268_AL_.jpg"],
    ESP: ["https://m.media-amazon.com/images/M/MV5BNWUyMmUxMGItOTZlNC00ZWQ2LTg1YjEtNjViYmFmODAyZWZlXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UY268_CR1,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BMWNlNGFjMTItMDU4NC00NWJlLWFlYjMtYzI3MDFlMzI3OTIwXkEyXkFqcGdeQXVyOTMyOTQyNzA@._V1_UY268_CR43,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BNzE4NWNiY2ItM2NiMi00Y2ZkLWFmODQtM2YxZjM5N2U3NGYzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_UY268_CR17,0,182,268_AL_.jpg"],
    MMO: ["https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_UY268_CR9,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BMzcwZWZjMzctNmFmMy00ZTQ1LThkMjktMzllNTY5MDNmZDgwXkEyXkFqcGdeQXVyMzIzOTgwMjg@._V1_UY268_CR3,0,182,268_AL_.jpg", 
             "https://m.media-amazon.com/images/M/MV5BOWIxNmFmZGEtZDk2NS00MjA5LTk5NWItODQ2OTE2ZmI5ZGE2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
  }
  
  function showGame(tipo) {
    var listaFilmes = document.querySelector('#listaFilmes');
    listaFilmes.innerHTML = '';
    
    for(var i = 0; i < allGames[tipo].length; i++){
      listarFilmesNaTela(allGames[tipo][i]);
    }
  }
  
  //Faz aparecer na tela
  function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = "<img id='listarFilmes' src="+ filme +">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  }
  