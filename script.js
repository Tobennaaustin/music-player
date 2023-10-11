const audio = document.getElementById('audio');
const prevBtn = document.getElementById("prevBtn");
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const songTitle = document.getElementById('songTitle');
const albumArtwork = document.getElementById('albumArtwork');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const playTime = document.getElementById('playTime');
const restartCurrentSongBtn = document.getElementById('restartCurrentSongBtn');
const restartPlaylistBtn = document.getElementById('restartPlaylistBtn');
const love = document.querySelector('#love');


// Define a playlist of objects with song details including thumbnails
const playlist = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/song.mp3',
  },
  {
    title: 'abcdefu',
    artist: 'unkown artist',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/abcdefu_Farloadedcom_GAYLE.mp3',
  },
  {
    title: 'Set Fire To The Rain',
    artist: 'Adele',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Adele-Set-Fire-To-The-Rain-via-Naijafinix.com_.mp3',
  },
  {
    title: 'Someone Like You',
    artist: 'Adele',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Adele-Someone-Like-You-(TrendyBeatz.com).mp3',
  },
  {
    title: 'Alone PT II',
    artist: 'Alan_Walker ft Ava_Max ',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Alan_Walker_ft_Ava_Max_-_Alone_pt_II_Pop9ja.com.ng.mp3',
  },
  {
    title: 'Devil Dosent Bargain',
    artist: 'Alec_Benjamin ',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Alec_Benjamin_Devil_Doesn_t_Bargain_(thinkNews.com.ng).mp3',
  },
  {
    title: 'Let_Me_Down_Slowly',
    artist: 'Alec_Benjamin',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Alec_Benjamin_Let_Me_Down_Slowly_(thinkNews.com.ng).mp3',
  },
  {
    title: 'Locker',
    artist: 'ArrDee',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/ArrDee_-_Locker_360media.com.ng.mp3',
  },
  {
    title: 'The_Nights',
    artist: 'Avicii',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/avicii-the-nights-1.mp3',
  },
  {
    title: 'I_Will_Pray',
    artist: 'Ebuka_songs',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Ebuka_Songs_-_I_Will_Pray_CeeNaija.com_.mp3',
  },
  {
    title: 'Celestial',
    artist: 'Ed_Sheeran',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Ed-Sheeran-Celestial-(BazeMack.com).mp3',
  },
  {
    title: 'Hate_Me',
    artist: 'LLie_Goulding ft Juice_WRLD',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/llie_Goulding_Juice_WRLD_Hate_me_(thinkNews.com.ng).mp3',
  },
  {
    title: 'SMA',
    artist: 'Nasty_C ft Rowlene',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Nasty-C-Ft-Rowlene-Sma-[TrendyBeatz.com].mp3',
  },
  {
    title: 'The_Search',
    artist: 'NF',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/NF_-_The_Search_Gospelpaper.com.ng.mp3',
  },
  {
    title: 'Sunroof',
    artist: 'Nicky_Youre-Dazy',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Nicky_Youre_dazy_-_Sunroof_Soloplay.ng.mp3',
  },
  {
    title: 'Dandelions',
    artist: 'Ruth_B',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Ruth-B-Dandelions.mp3',
  },
  {
    title: 'Hope',
    artist: 'XXXTENTACION',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/XXXTENTACION_Hope_(thinkNews.com.ng).mp3',
  },
  {
    title: 'Spirit_Chant',
    artist: 'Victoria_Orenze',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Victoria_Orenze_-_Spirit_Chant_CeeNaija.com_.mp3',
  },
  {
    title: 'Cradles',
    artist: 'Sub-Urban',
    thumbnail: 'music-logo2.jpg',
    file: 'musics/Sub_Urban_-_Cradles_Soloplay.ng.mp3',
  },
  
  // Add more songs as needed
];


let currentSongIndex = 0;
let isPlaying = false; 
let currentPlaybackTime = 0;

function playSong(index) {
  if (index >= 0 && index < playlist.length) {
    const song = playlist[index];
    audio.src = song.file;
    audio.currentTime = 0;
    if (isPlaying) {
      audio.play();
      playPauseBtn.querySelector("i.fa").classList.add("fa-pause");
      playPauseBtn.querySelector("i.fa").classList.remove("fa-play");
    } else {
      playPauseBtn.querySelector("i.fa").classList.add("fa-play");
      playPauseBtn.querySelector("i.fa").classList.remove("fa-pause");
    }
    currentSongIndex = index;
    updateSongInfo(song);
  }
}

function pauseSong() {
  audio.pause();
  playPauseBtn.querySelector("i.fa").classList.add("fa-play");
  playPauseBtn.querySelector("i.fa").classList.remove("fa-pause");
  isPlaying = false;
  currentPlaybackTime = audio.currentTime;
}

function restartPlaylist() {
  currentSongIndex = 0;
  playSong(currentSongIndex);
}

function updateSongInfo(song) {
  songTitle.textContent = `Title: ${song.title}`;
  artist.textContent = `Artist: ${song.artist}`;
  albumArtwork.src = song.thumbnail;
  albumArtwork.alt = `Album Artwork for ${song.album}`;
}

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    audio.play();
    playPauseBtn.querySelector("i.fa").classList.remove("fa-play");
    playPauseBtn.querySelector("i.fa").classList.add("fa-pause"); 
    isPlaying = true; // Set the playback state to playing
  }
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  playSong(currentSongIndex);
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  playSong(currentSongIndex);
});

restartBtn.addEventListener('click', () => {
  restartPlaylist();
});

audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  playSong(currentSongIndex);
});

audio.autoplay = false;
playSong(currentSongIndex);

function updateProgressBar() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progress.value = currentTime;
  progress.max = duration;
  playTime.textContent = formatTime(currentTime) + ' / ' + formatTime(duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audio.addEventListener('timeupdate', updateProgressBar);

progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
    updateProgressBar();
});

  progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
    updateProgressBar();
  });

  
 love.addEventListener('click', () =>{
  love.style.backgroundcolor = "green";
 });