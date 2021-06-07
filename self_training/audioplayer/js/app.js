const musiccontainer = document.getElementById("music-container");

const title = document.getElementById("title");

const progresscontainer = document.getElementById("progress-container"),
    progress = document.getElementById("progress");

    const audio = document.getElementById('audio');
    const cover = document.getElementById('cover');

    const prevbtn = document.getElementById('prev');
    const playbtn = document.getElementById('play');
    const nextbtn = document.getElementById("next");

    // Song Title
    const songs = ['sample1','sample2','sample3'];
    let songindex = 0;
    loadsong(songs[songindex]);

    function loadsong(music){
        title.innerText = music;
        audio.src = `music/${music}.mp3`;
        cover.src = `img/${music}.jpg`;
    }

    playbtn.addEventListener('click',()=>{
        const isplaying = musiccontainer.classList.contains('play');
        if(isplaying){
            pausesong();
        }else{
            playsong();
        }
    });

    function playsong(){
        musiccontainer.classList.add('play');

        playbtn.querySelector('i.fas').classList.remove('fa-play');
        playbtn.querySelector('i.fas').classList.add('fa-pause');
        audio.play();
    }
    function pausesong(){
        musiccontainer.classList.remove("play");
        playbtn.querySelector('i.fas').classList.remove('fa-pause');
        playbtn.querySelector('i.fas').classList.add('fa-play');

        audio.pause();
    }
    function previousong(){
        songindex--;
        if(songindex<0){
            songindex = songs.length - 1;
        }
        loadsong(songs[songindex]);
        playsong();
    }
    function nextsong(){
        songindex++;
        if(songindex > songs.length-1){
            songindex = 0;
        }
        loadsong(songs[songindex]);
        playsong();
    }
    function updateprogress(){
        progress.style.width = `${(audio.currentTime / audio.duration)* 100}`+'%';
    }
    function setprogress(e){
        const width = this.clientWidth;
        // console.log(width);
        const clickx = e.offsetX;
        // console.log(clickx);
        const duration = audio.duration;
        audio.currentTime = (clickx / width) * duration;
    }
    prevbtn.addEventListener('click',previousong);
    nextbtn.addEventListener('click',nextsong);

    audio.addEventListener('timeupdate',updateprogress);
    progresscontainer.addEventListener('click',setprogress);
    audio.addEventListener('ended',nextsong);