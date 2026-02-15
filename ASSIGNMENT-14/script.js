let keys = document.querySelectorAll(".key");

let body = document.body;
body.addEventListener("keydown", function (elem) {
  let keyPressed = elem.key.toUpperCase();
  keys.forEach(function (key) {
    if (key.dataset.key === keyPressed) {
      let note = key.dataset.note;
      let audio = document.querySelector(`audio[data-note="${note}"]`);
      audio.currentTime = 0;
      audio.play();

      key.classList.add("active");
    }
  });
});

body.addEventListener("keyup", function (elem) {
  let keyReleased = elem.key.toUpperCase();
  keys.forEach(function (key) {
    if (key.dataset.key === keyReleased) {
      key.classList.remove("active");
    }
  });
});

keys.forEach(function (key) {
  key.addEventListener("click", function (elem) {
    let note = key.dataset.note;

    let audio = document.querySelector(`audio[data-note="${note}"]`);
    audio.currentTime = 0;
    audio.play();

    key.classList.add("active");
    setTimeout(function () {
      key.classList.remove("active");
    }, 100);
  });
});

let cursor = document.querySelector("#cursor");

document.body.addEventListener("mousemove", function (elem) {
  cursor.style.top = elem.clientY + "px";
  cursor.style.left = elem.clientX + "px";
  console.log(elem.clientX, elem.clientY)
});
