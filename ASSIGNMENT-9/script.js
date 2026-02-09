let box = document.getElementById("box");
let btn = document.querySelector("button");
let main = document.querySelector("main");
let h1 = document.getElementById("title");

let ipl = [
  {
    title: "SRH",
    primary: "orange",
    secondary: "crimson",
  },
  {
    title: "CSK",
    primary: "yellow",
    secondary: "black",
  },
  {
    title: "Delhi Capitals",
    primary: "red",
    secondary: "blue",
  },
  {
    title: "Gujrat titans",
    primary: "aqua",
    secondary: "darkblue",
  },
  {
    title: "KKR",
    primary: "yellow",
    secondary: "purple",
  },
  {
    title: "Lucknow Giants",
    primary: "white",
    secondary: "lightblue",
  },
  {
    title: "Mumbai indians",
    primary: "blue",
    secondary: "darkblue",
  },
  {
    title: "Punjab kings",
    primary: "red",
    secondary: "black",
  },
  {
    title: "RCB",
    primary: "black",
    secondary: "red",
  },
];

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * ipl.length);

  let title = ipl[num].title;
  let primary = ipl[num].primary;
  let secondary = ipl[num].secondary;

  h1.textContent = title;
  box.style.backgroundColor = primary;
  main.style.backgroundColor = secondary;
});
