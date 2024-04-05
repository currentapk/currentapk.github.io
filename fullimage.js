let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const updateImage = (index) => {
  const fullscreenImg = document.querySelector('.fullscreen img');
  if (fullscreenImg) {
    fullscreenImg.src = images[index].src;
  }
};

// Função para abrir a imagem em tela cheia
function openFullscreen(index) {
  currentIndex = index;
  const fullscreenDiv = document.createElement('div');
  fullscreenDiv.classList.add('fullscreen');
  fullscreenDiv.style.display = 'flex';
  fullscreenDiv.innerHTML = `
    <img src="${images[index].src}" style="max-width: 90%; max-height: 90%;" />
    <button class="buttonGallery f1" onclick="closeFullscreen()">close</button>
    <button class="buttonGallery a1" onclick="showPrev()">prev</button>
    <button class="buttonGallery p1" onclick="showNext()">next</button>
  `;
  document.body.appendChild(fullscreenDiv);
}

// Função para fechar a imagem em tela cheia
function closeFullscreen() {
  const fullscreenDiv = document.querySelector('.fullscreen');
  if (fullscreenDiv) {
    document.body.removeChild(fullscreenDiv);
  }
}

// Função para mostrar a imagem anterior
function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage(currentIndex);
  }
}

// Função para mostrar a próxima imagem
function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage(currentIndex);
  }
}

// Adiciona evento de clique para abrir as imagens em tela cheia
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openFullscreen(index);
  });
});
