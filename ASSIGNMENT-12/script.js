let card = document.querySelector(".card");
let img = document.querySelector("#img");
let like = document.querySelector("#like");

card.addEventListener("dblclick", function () {
  like.style.opacity = "0.9";
  like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(function () {
    like.style.transform = "translate(-50%, -300%) scale(1) rotate(60deg)";
    like.style.opacity = "0";
  }, 300);

  setTimeout(function () {
    like.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
  }, 500);
});
