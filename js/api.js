const url = "http://www.omdbapi.com/?apikey=d93d7cce&t=clockwork orange";

function infoAPI(url){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let movie = data;
    console.log(movie);

    let banner = document.getElementById("banner");
    banner.style.backgroundImage = `url("${movie.Poster}"`;

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = `<h2>${movie.Title}</h2>`;

    let sinopse = document.getElementById("sinopse");
    sinopse.innerHTML = `<p>${movie.Plot}</p>`;
  })
  .catch(function(error) {
    console.log(error);
  });
}

infoAPI(url);