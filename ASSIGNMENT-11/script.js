let btn = document.querySelector("button");
let h2 = document.getElementById("percent");
let inner = document.querySelector(".inner");
let card = document.querySelector(".card");

let grow = 0;
btn.addEventListener("click", function () {
  let num = 30 + Math.floor(Math.random() * 50);
  card.style.pointerEvents = "none";
  let interval = setInterval(function () {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);

  setTimeout(function () {
    clearInterval(interval);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = "0.8";
    btn.style.cursor = "default";
    let h2= document.createElement('h2');
    h2.innerHTML= `Download complete in <span>${num/10}</span> seconds`
    card.appendChild(h2);
  }, num * 100);
});
