// ui
const video = document.getElementById("video");

const play = document.getElementById("play"),
    stop = document.getElementById("stop"),
    progress = document.getElementById("progress"),
    timestamp = document.getElementById("timestamp");

function togglevideostatus(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
}

function updateplayicon(){
    if(video.paused){
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    }else{
        play.innerHTML =   `<i class="fa fa-play fa-2x"></i>`;
    }
}

function updateprogress(){
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = Math.floor((video.currentTime / video.duration) * 100);

    // getMinute
    let mins = Math.floor(video.currentTime / 60);
    if(mins<10){
        mins = "0" + String(mins);
    }

    // getSecond
    let sec = Math.floor(video.currentTime % 60);
    if(sec<10){
        sec = "0" + String(sec);
    }

    timestamp.innerHTML = `${mins}:${sec}`;

}
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}
function setvideoprogress(){
    video.currentTime = (progress.value * video.duration) / 100;
}
// Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('pause',updateplayicon);
video.addEventListener('play',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);
progress.addEventListener('click',setvideoprogress);