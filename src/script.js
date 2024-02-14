const API_KEY = "d62fbebb62e445819b0fd8dcb9f9a137";

const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", function () {
  fetchNews("India");
});

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
}
