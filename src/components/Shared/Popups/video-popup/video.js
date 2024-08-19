const videoPopup = document.querySelector('.video-popup');

if (videoPopup) {
  const video = videoPopup.querySelector('video');
  const buttonOpen = document.querySelector('[data-modal-open="video-popup"]');
  const buttonClose = videoPopup.querySelector('.close-popup');

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      video.pause();
    }
  };

  buttonOpen.addEventListener('click', () => {
    video.play();

    document.addEventListener('keydown', handleEscape);
  });

  buttonClose.addEventListener('click', () => {
    video.pause();

    document.removeEventListener('keydown', handleEscape);
  });
}
