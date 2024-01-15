let musics = [
  {
    name: "Set Fire To The Rain",
    cover: "images/images1.jpeg",
    audio: new Audio("./musics/music1.mp3"),
  },
];
let range = document.querySelector("#music-time");
let preBtn = document.querySelector("#pre-btn");
let playBtn = document.querySelector("#play-btn");
let nextBtn = document.querySelector("#next-btn");
let musicCover = document.querySelector("#music-cover");
let musicName = document.querySelector("#music-name");

let currentMusic = 0;
let audio = musics[currentMusic].audio;
musicCover.src = musics[currentMusic].cover;
musicName.src = musics[currentMusic].name;
