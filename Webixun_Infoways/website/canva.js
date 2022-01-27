let colors = [
    'white',
    '#7F7F7F',
    '#202020',
    '#6FE1BF',
    '#09FFBB',
    '#2BCA9A',
];


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = colors[0];

var c = canvas.getContext('2d');
console.log(canvas);

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 55;
var minRadius = 3;
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(event)
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

//Isso é um objeto, começa com MAIUSCULA PRA SINALIZAR
function Circle(x, y, dx, dy, radius){
    color = Math.floor(Math.random() *5 + 1);
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = minRadius;
    this.color = colors[Math.floor(Math.random() * (colors.length) + 1)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, (false));
        c.fillStyle = this.color;
        c.fill();	

    }
    this.update = function(){
        if(this.x + this.radius > canvas.width || this.x - radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //Interatividade
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y <50 && mouse.y - this.y > -50
            ) {
            if(this.radius < maxRadius)	{
            this.radius += 1;
            }
        } else if(this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}



var circleArray = [];

function init(){

circleArray = [];
canvasTotal = canvas.width + canvas.height;
console.log(canvasTotal);
for (var i = 0; i < canvasTotal/3; i++) {
    var radius = Math.random() * 5 + 1;
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height- radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        
    }		
}

init();
animate();