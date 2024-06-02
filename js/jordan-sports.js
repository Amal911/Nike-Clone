document.addEventListener('DOMContentLoaded', () => {
  const thumbnail = document.querySelector('.thumbnail');
  const video = document.querySelector('.video');
  const overlayButtons = document.querySelector('.overlay-buttons');
  const controls = document.querySelector('.controls');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const muteBtn = document.getElementById('mute-btn');
  const watchBtn = document.getElementById('watch-btn');
  const closeBtn = document.getElementById('close-btn'); // Close button element
  const progressBar = document.querySelector('.progress-bar div');
  const currentTimeElem = document.getElementById('current-time');
  const durationElem = document.getElementById('duration');
  const videoContainer = document.getElementById('video-container');

  let isWatched = false;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const updateProgress = () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    currentTimeElem.textContent = formatTime(video.currentTime);
  };

  const showControls = () => {
    controls.style.visibility = 'visible';
  };

  const hideControls = () => {
    controls.style.visibility = 'hidden';
  };

  const showVideo = (playWithSound = false) => {
    thumbnail.classList.add('hidden');
    overlayButtons.classList.remove('hidden');
    video.classList.remove('hidden');
    controls.classList.remove('hidden');
    video.muted = !playWithSound;
    video.play().catch(error => {
      console.log('Error playing video:', error);
    });
    if (playWithSound) {
      isWatched = true;
      closeBtn.style.display = 'block'; // Display close button when video starts playing with sound
    }
  };

  videoContainer.addEventListener('mouseenter', () => {
    if (!isWatched) {
      showVideo(false);
      hideControls();
    }
  });

  watchBtn.addEventListener('click', () => {
    showVideo(true);
    showControls();
    overlayButtons.classList.add('hidden');
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    thumbnail.classList.remove('hidden');
    overlayButtons.classList.remove('hidden');
    video.classList.add('hidden');
    controls.classList.add('hidden');
    closeBtn.style.display = 'none'; // Hide close button when returning to thumbnail state
    isWatched = false; // Reset watched state
  });

  playBtn.addEventListener('click', () => {
    video.play().catch(error => {
      console.log('Error playing video:', error);
    });
  });

  pauseBtn.addEventListener('click', () => {
    video.pause();
  });

  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
  });

  video.addEventListener('play', () => {
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  });

  video.addEventListener('pause', () => {
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
  });

  video.addEventListener('timeupdate', updateProgress);

  video.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(video.duration);
  });

});
//Navbar hovering
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('sticky-nav').style.display = "none";
  
  window.addEventListener('scroll', function () {
      if (this.window.scrollY == 0) {
          document.getElementById('sticky-nav').style.display = "none";
          document.getElementById('main-nav').style.display = "block";    
      } else {
          document.getElementById('sticky-nav').style.display = "block";
          document.getElementById('main-nav').style.display = "none";
          
      }
  });
});