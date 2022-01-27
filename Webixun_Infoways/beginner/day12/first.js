fname="Adarsh";
greeting="Hi";
document.getElementById("name").innerHTML=greeting+" "+ fname+" "+"welocme back ";

 let count=0
function addtion(){
    count = count +1;
    demo.innerHTML=count;
}
addtion();

let countstr=0
 let saveel=document.getElementById("entries")
    function save(){
        countstr=count+" - "
        entries.innerHTML += countstr;
        console.log(count)
    }

save()

let resetbtt=document.getElementById("reset-btn")
function reset(){
    countstr=0;
    count=0
    reset.innerHTML
    console.log(countstr)
}