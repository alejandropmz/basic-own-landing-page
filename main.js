const reproducer = document.getElementById('reproducer-icon');
let video = document.getElementsByTagName('video')
video = [...video]
console.log(video)

/* play button */
const playButton = document.createElement('button')
const pause = document.createElement('i')
pause.className = 'bi bi-play'
playButton.appendChild(pause)

/* pause button */
const pauseButton = document.createElement('button')
const play = document.createElement('i')
play.className = 'bi-pause-fill'
pauseButton.appendChild(play)

/* videos */
const starVideo = document.getElementById('star-video')

reproducer.addEventListener('click', ()=> {
  const icon = document.getElementById('reproducer-icon');
  
  if (icon.firstChild.className == "bi-pause-fill"){
    icon.firstChild.className = "bi bi-play"
    for (let i = 0; i<=video.length; i++){
      video[i].pause();
    }
  } else {
    icon.firstChild.className = "bi-pause-fill"
    for (let i = 0; i<=video.length; i++){
      video[i].play();
    }
  }
})
