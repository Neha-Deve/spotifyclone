console.log('Welcome to Spotify')

let songIndex=0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterplay')
let myProgressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')

let song = [
{songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath:'covers/1.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:'covers/1.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:'covers/1.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:'covers/1.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:'covers/1.jpg'}

]


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-cicle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=0;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-cicle');
        masterPlay.classList.add('fa-play-circle')
    }
})


myProgressbar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');


})
