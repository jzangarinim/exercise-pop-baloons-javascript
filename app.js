// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let color = ['green', 'blue', 'yellow', 'gray', 'red', 'violet', 'black'];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    render();
}

let balloonAlive = 20;

let start = "";

for (let i = 0; i<balloonAlive; i++) {
    const randomColor = color[Math.floor(Math.random() * color.length)]
    let balloon = document.createElement("div");
    balloon.classList.add("balloon", "balloon");
    balloon.style.background = randomColor;
    balloon.id = i;
    balloon.addEventListener("click", e=> {
        if (balloonAlive == 20) {
            start = Date.now();
        }
        balloon.style.visibility= "hidden";
        balloonAlive--
        render();
    })
    document.querySelector("#balloon-map").appendChild(balloon);
}

const render = () => {
    document.querySelector("#balloon-count").innerHTML = balloonAlive; // <-- render the balloon count into the DOM

    if(balloonAlive == 0) {
        console.log((Date.now() - start) / 1000);
        document.querySelector("#balloon-map").innerHTML = `<h3> Te has demorado ${(Date.now() - start) / 1000} segundos</h3>`
        setTimeout(()=>{
            window.location.reload(); // <--- reload website when no more balloons are left
        },5000) // Atrasa el reload por 2000 milisegundos, es decir ejecuta el código después de 2 segundos
    }
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();