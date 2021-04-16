const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const URL = "https://type.fit/api/quotes";

const getOneQuote = (resData) => {
  const oneQuote = Math.floor(Math.random() * 1643);
  quote.innerText = resData[oneQuote].text;
  author.innerText = `- ${resData[oneQuote].author}`;
};

const getRandomQuotes = async () => {
  quote.innerText = "Getting Quote For U";
  const res = await fetch(URL);
  const resData = await res.json();
  getOneQuote(resData);
};

btn.addEventListener("click", () => {
  getRandomQuotes();
});

getRandomQuotes();
