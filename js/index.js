const keysMap = {
  'KeyA': 'clap',
  'KeyS': 'hihat',
  'KeyD': 'kick',
  'KeyF': 'openhat',
  'KeyG': 'boom',
  'KeyH': 'ride',
  'KeyJ': 'snare',
  'KeyK': 'tom',
  'KeyL': 'tink'
};

const stopTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  
  e.target.classList.remove('playing');
};

const playSound = (e) => {
  const sound = keysMap[e.code];

  if (!sound) return;

  const key = document.querySelector(`.key[data-key="${sound}"]`);
  const audio = document.querySelector(`audio[data-key="${sound}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach( key => key.addEventListener('transitionend',stopTransition));
window.addEventListener('keydown', playSound)