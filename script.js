const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let color = 'black';
let isPressed = false;
let y = undefined;
let x = undefined;
size = 30;



// change color func
colorEl.addEventListener('input', () => {
    color = colorEl.value;
    console.log(size)
});

// increase stroke size 
increaseBtn.addEventListener('click', () => {
    sizeEl.innerHTML = parseInt(sizeEl.innerHTML) + 5;
    size = parseInt(sizeEl.innerHTML);
    if(size < 10){
        size = 5;
    }
});
// decrease stroke size 
decreaseBtn.addEventListener('click', () => {
    sizeEl.innerHTML = parseInt(sizeEl.innerHTML) - 5;
    size = parseInt(sizeEl.innerHTML);
    if(size > 60){
        size = 60;
    }
});

// clear the canvas
clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0,
        canvas.width, canvas.height);
});




canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

});
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;

});
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
        
    }
});

const drawCircle = (x2,y2)=>{
    ctx.beginPath();
    ctx.arc(x2,y2,size, 0, 2* Math.PI)
    ctx.fillStyle = color;
    ctx.fill();
}

const drawLine =(x, y, x2, y2)=> {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


console.log(MouseEvent);