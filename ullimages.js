let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

const updateImage = (index) => {
  const fullscreenImg = document.querySelector('.fullscreen img');
  if (fullscreenImg) {
    fullscreenImg.src = images[index].src;
  }
};

function openFullscreen(index) {
  currentIndex = index;
  const fullscreenDiv = document.createElement('div');
  fullscreenDiv.classList.add('fullscreen');
  fullscreenDiv.style.display = 'flex';
  fullscreenDiv.innerHTML = `
    <img src="${images[index].src}" style="max-width: 100%; max-height: 100%;" />
    <button class="button-gallery f1" onclick="closeFullscreen()">close</button>
    <button class="button-gallery a1" onclick="showPrev()">prev</button>
    <button class="button-gallery p1" onclick="showNext()">next</button>
  `;
  document.body.appendChild(fullscreenDiv);
}

function closeFullscreen() {
  const fullscreenDiv = document.querySelector('.fullscreen');
  if (fullscreenDiv) {
    document.body.removeChild(fullscreenDiv);
  }
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
  }
}

function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
  }
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openFullscreen(index);
  });
});
