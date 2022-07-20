let landingPage = document.querySelector(".landing-page");
let imgsArray = [
  "images.jpg",
  "images (1).jpg",
  "images (2).jpg",
  "images (3).jpg",
  "download.jpg",
];


setInterval(()=>

{
    let randomNumber = Math.floor(Math.random() *imgsArray.length )
    landingPage.style.backgroundImage = 'url("'+imgsArray[randomNumber] +'")';

},1000 );