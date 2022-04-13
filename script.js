console.log("welcome to spotify")

let songindex = 0;
let audioElement = new Audio('songs/10.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:'Warriyo - Mortal(feat. Laura Brehm) [NCS Release]' , filePath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'Cielo - Huma-Huma' , filePath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName:'Deaf Kev[NCS Releas]' , filePath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'Different Heaven and Ehide ' , filePath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Janji - Heores - feat' , filePath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'[NCS Release]' , filePath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName:'[Let me love you]' , filePath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName:'[Lofi]' , filePath:'songs/8.mp3', coverPath:'covers/8.jpg'}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
   
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle')
        songindex = parseInt(e.target.id);
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songindex>=0){
        songindex = 0;
    }
    else{
        songindex +=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('back').addEventListener('click' ,()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex -=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})