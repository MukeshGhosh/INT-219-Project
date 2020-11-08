var song = new Audio;
var muted = false;
var vol = 1;
song.type = 'audio/mpeg';
song.src = 'audio/in-the-end.mp3';//Audio file source url

function skip(time) {
   if (time == 'back') {
     song.currentTime = (song.currentTime - 5);
   } else if (time == 'fwd') {
     song.currentTime = (song.currentTime + 5);
   }
}
function playpause() {
  if (!song.paused) {
    song.pause();
  } else {
    song.play();
  }
}
function stop() {
  song.pause();
  song.currentTime = 0;
  document.getElementById('seek').value = 0;
}
function setPos(pos) {
  song.currentTime = pos;
}
function mute() {
  if (muted) {
    song.volume = vol;
    muted = false;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    song.volume = 0;
    muted = true;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}
function setVolume(volume) {
  song.volume = volume;
  vol = volume;
}
song.addEventListener('timeupdate',function() {
  curtime = parseInt(song.currentTime,10);
  document.getElementById('seek').max = song.duration;
  document.getElementById('seek').value = curtime;
})

/*================================queue==============*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
