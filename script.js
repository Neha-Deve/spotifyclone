console.log('Welcome to Spotify')

let i=0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterplay')
let myProgressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
{songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath:'covers/1.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:'covers/2.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath:'covers/3.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/4.mp3", coverPath:'covers/4.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath:'covers/5.jpg'},
{songName: "Salam-e-Ishq", filePath: "songs/6.mp3", coverPath:'covers/6.jpg'}


]
songitem.forEach(element => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    i= i+1;
});


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-cicle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-cicle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity= 0;
    }
})


audioElement.addEventListener('timeupdate' , ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressbar.value = progress; 

})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songitemplay')).forEach(element =>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');

    })
})
