
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const title = document.querySelector(".title");
const year = document.querySelector(".year");
const movie = document.querySelector(".movie");
const img = document.querySelector(".img");

async function checkMovie(searchMovie) {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=f8a9c2ca`);
  const data = await response.json();

  if (data.Search && data.Search.length > 0) {
    // Generate a random index to select a movie from the search results
    const randomIndex = Math.floor(Math.random() * data.Search.length);

    // Display the randomly selected movie's information
    title.innerHTML = data.Search[randomIndex].Title;
    year.innerHTML = data.Search[randomIndex].Year;
    img.src = data.Search[randomIndex].Poster;
    movie.style.display = "block"
  } else {
    title.innerHTML = "Movie not found";
    year.innerHTML = "";
    img.src = ""; // Clear the image if no movie is found
  }
}

searchBtn.addEventListener("click", () => {
  checkMovie(searchBox.value);
});
