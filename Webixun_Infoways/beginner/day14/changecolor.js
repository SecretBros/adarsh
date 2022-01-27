let color = ['greeen', 'yellow', 'black', 'white', 'red', 'purple']

let button = document.getElementById('button')
button.addEventListener('click', function () {
    let randomcolor = color[Math.floor(Math.random() * color.length)]
    let container = document.getElementById('container');
    container.style.background = randomcolor;


})




// document.getElementsByClassName('.container').addEventListener('click',function(){
//         var randomcolor=color[Math.floor(Math.random()*color.length)]
//       this.style.background=randomcolor;})`````````````````