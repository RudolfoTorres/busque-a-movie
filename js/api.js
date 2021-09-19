const url = "https://www.omdbapi.com/?apikey=d93d7cce&t=lord of the rings";

function infoAPI(url){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let movie = data;
    console.log(movie);

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

infoAPI(url);

function mostrarEsconder(el) {
  if(document.getElementById(el).classList.contains("mostra")) {
    document.getElementById(el).classList.remove('mostra');
  } else {
    document.getElementById(el).classList.add('mostra');
  }  
}