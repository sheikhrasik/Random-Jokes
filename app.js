//queryselectors
const jokeText = document.querySelector(".joke-body");
const jokeButton = document.querySelector(".new-joke-btn");

//Event Listeners
jokeButton.addEventListener("click", getJokes);

//functions
async function getJokes() {
  const url = `https://icanhazdadjoke.com/`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  jokeText.innerHTML = data.joke;
}
