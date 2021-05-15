//ui
const video = document.getElementById("video");

const play = document.getElementById("play"),
    stop = document.getElementById("stop"),
    progress = document.getElementById("progress"),
    timstamp = document.getElementById("timestamp");

    function togglevideostatus(){
            //paused from video api
        if(video.paused){
            //play() from api
            video.play();
        }else{
            //pause() from api
            video.pause();
        }
    }
    function updateplayicon(){
        if(video.paused){
            play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
        }else{
            play.innerHTML =  `<i class="fa fa-pause fa-2x"></i>`;
        }
    }
    function updateprogress(){
        // console.log(video.currentTime);
        // console.log(video.duration);

        progress.value = (video.currentTime / video.duration) * 100;
        //get Minute
        let mins = Math.floor(video.currentTime / 60);
        if(mins < 10){
            mins = '0'+String(mins);
        }
        //get seconds
        let secs = Math.floor(video.currentTime % 60);
        if(secs < 10){
            secs = '0'+String(secs);
        }

        timstamp.innerHTML=`${mins}:${secs}`;
    }

    //Stop video
    function stopvideo(){
        video.currentTime = 0;
        video.pause();
    }
    function setvideoprogress(){
        video.currentTime = (progress.value * video.duration) / 100;
    }
    // Event Listener
    video.addEventListener('click',togglevideostatus);
    video.addEventListener('play',updateplayicon);
    video.addEventListener('pause',updateplayicon);
    video.addEventListener('timeupdate',updateprogress);

    play.addEventListener('click',togglevideostatus);
    stop.addEventListener('click',stopvideo);
    progress.addEventListener('click',setvideoprogress);

