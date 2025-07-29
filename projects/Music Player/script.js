/*WebPlayer.js (vanilla) */

let currentMusic = 0;

const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const songDuration = document.querySelector(".song-duration");
const play = document.querySelector(".play");
const fowardBtn = document.querySelector(".btn-forward");
const backwardBtn = document.querySelector(".btn-backward");

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
};

const setMusic = (i) => {
  currentMusic = i;
  const song = songs[i];

  music.src = song.path;
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  disk.style.backgroundImage = `url('${song.cover}')`;

  music.onloadedmetadata = () => {
    seekBar.max = music.duration;
    songDuration.innerHTML = formatTime(music.duration);
    currentTime.innerHTML = "00:00";
  };
};

play.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    play.classList.remove("pause");
    disk.classList.add("rotating");
  } else {
    music.pause();
    play.classList.add("pause");
    disk.classList.remove("rotating");
  }
});

music.addEventListener("timeupdate", () => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
});

seekBar.addEventListener("input", () => {
  music.currentTime = seekBar.value;
});

fowardBtn.addEventListener("click", () => {
  currentMusic = (currentMusic + 1) % songs.length;
  setMusic(currentMusic);
  music.play();
  play.classList.remove("pause");
  disk.classList.add("rotating");
});

backwardBtn.addEventListener("click", () => {
  currentMusic = (currentMusic - 1 + songs.length) % songs.length;
  setMusic(currentMusic);
  music.play();
  play.classList.remove("pause");
  disk.classList.add("rotating");
});

setMusic(currentMusic);
