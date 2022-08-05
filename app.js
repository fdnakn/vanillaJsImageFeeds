const container = document.querySelector(".container");
const resim = "https://source.unsplash.com/random/"



for(let i = 0; i < 32; i++){
   const image = document.createElement("img");
   image.src = `${resim}${randomNumber()}x${randomNumber()}`
   container.appendChild(image); 
}

function randomNumber() {
    const number = Math.floor(Math.random() * 10) +300;
    return number
}
