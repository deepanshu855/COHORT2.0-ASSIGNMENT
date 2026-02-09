let btn= document.querySelector('button');
let main= document.querySelector('main');

let quotes= ["Ignorance is bliss.", "Who will guard the guardians?", "The world operates on sheep mentality, and I hate it.", "I think, therefore I am.", "Winning isn’t everything, but wanting to win is."];

main.addEventListener('mousemove', function(){
    let h1= document.createElement('h1');
    let quote= quotes[Math.floor(Math.random()*quotes.length)]
    h1.innerHTML= quote;
    h1.style.position= 'absolute';

    let x= Math.floor(Math.random()*90);
    let y= Math.floor(Math.random()*90);
    let rotate= Math.floor(Math.random()*360);
    let r= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);

    h1.style.left= x+ "%";
    h1.style.top= y+ "%";
    h1.style.rotate= rotate+ "deg"
    h1.style.color= `rgb(${r}, ${g}, ${b})`

    main.appendChild(h1)
})