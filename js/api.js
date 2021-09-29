function mostrarEsconder(el) {
  if(document.getElementById(el).classList.contains("mostra")) {
    document.getElementById(el).classList.remove("mostra");
  } else {
    document.getElementById(el).classList.add("mostra");
  }  
}

function infoAPI(url){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let movie = data;

    let banner = document.getElementById("banner");
    banner.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,1)), url("${movie.Poster}"`;

    let genero = document.getElementById("genero");
    genero.innerHTML = `<p>${movie.Genre}</p>`;
    let duracao = document.getElementById("duracao");
    duracao.innerHTML = `<p>${movie.Runtime}</p>`;

    let nota = document.getElementById("nota");
    nota.innerHTML = `<p>${movie.imdbRating}</p>`;

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = `<h2>${movie.Title}</h2>`;

    let sinopse = document.getElementById("sinopse");
    sinopse.innerHTML = `<p>${movie.Plot}</p>`;

    let diretor = document.getElementById("diretor");
    diretor.innerHTML = `<p>${movie.Director}</p>`;
    let ano = document.getElementById("ano");
    ano.innerHTML = `<p>&nbsp;${movie.Year}</p>`;

    let elenco = document.getElementById("elenco");
    elenco.innerHTML = `<p>${movie.Actors}</p>`;
    let premios = document.getElementById("premios");
    premios.innerHTML = `<p>${movie.Awards}</p>`;
    let produtora = document.getElementById("produtora");
    produtora.innerHTML = `<p>${movie.Production}</p>`;
    let pais = document.getElementById("pais");
    pais.innerHTML = `<p>${movie.Country}</p>`;
    let classificacao = document.getElementById("classificacao");
    classificacao.innerHTML = `<p>${movie.Rated}</p>`;
  })
  .catch(function(error) {
    console.log(error);
  });
}

const buscador = document.getElementById("select-movie");

buscador.addEventListener("keyup", (el) => {
  let urlBusca = `https://www.omdbapi.com/?apikey=d93d7cce&s=${el.target.value}`;
  fetch(urlBusca)
  .then((resp) => resp.json())
  .then(function(data) {
    let filmes = data;

    const moviesSelect = document.getElementById("movies-select");
    moviesSelect.options.length = 0;

    filmes.Search.forEach(element => {
      option = new Option(element.Title, element.Title);
      moviesSelect.options[moviesSelect.options.length] = option;
    });

    moviesSelect.addEventListener('change', function () {
      let url = `https://www.omdbapi.com/?apikey=d93d7cce&t=${this.value}`;
      infoAPI(url);
    });
    
  })
  .catch(function(error) {
    console.log(error);
  });
});