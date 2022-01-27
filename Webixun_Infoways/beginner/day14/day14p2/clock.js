function display_time() {
   let time = new Date();
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    hour = hour.length == 1 ? 0 + hour : hour;
    minutes = minutes.length == 1 ? 0 + minutes : minutes;
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    let show_time = document.querySelector('#digtal_clock')
    show_time.innerHTML = hour + ':' + minutes + ':' + seconds;
    console.log(time)

 }
setInterval(display_time, 1000);




