const url = "https://www.omdbapi.com/?apikey=d93d7cce&t=avengers endgame";

function infoAPI(url){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let movie = data;
    console.log(movie);

    let banner = document.getElementById("banner");
    banner.style.backgroundImage = `url("${movie.Poster}"`;

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
  })
  .catch(function(error) {
    console.log(error);
  });
}

infoAPI(url);