// Função para abrir a imagem em tela cheia com botões de navegação
function openFullscreen(src, index, galleryItems) {
  // Criar o fundo escuro
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #00aad5; display: flex; justify-content: center; align-items: center; z-index: 1000;';

  // Criar a imagem em tela cheia
  const img = new Image();
  img.src = src;
  img.style.cssText = 'max-width: 100%; max-height: 100%; border-radius: 8px; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px rgba(60, 64, 67, 0.15);';
  overlay.appendChild(img);

  // Criar botão de fechar
  const closeButton = document.createElement('button');
  closeButton.textContent = 'FECHAR';
  closeButton.style.cssText = 'position: absolute; top: 20px; right: 20px; z-index: 1001; color: white; font-weight: bold; background-color: deeppink; border: 1px solid white; border-radius: 4px;';
  closeButton.onclick = function() {
    document.body.removeChild(overlay);
  };
  overlay.appendChild(closeButton);

  // Função para atualizar a imagem exibida
  function updateImage(newIndex) {
    const newSrc = galleryItems[newIndex].querySelector('.source-2').srcset;
    img.src = newSrc;
    index = newIndex;
    prevButton.disabled = index === 0;
    nextButton.disabled = index === galleryItems.length - 1;
  }

  // Criar botão de anterior
  const prevButton = document.createElement('button');
  prevButton.textContent = '«';
  prevButton.style.cssText = 'position: absolute; left: 20px; top: 50%; transform: translateY(-50%); z-index: 1001; font-size: 22px; color: green; font-weight: bold;';
  prevButton.onclick = function() {
    if (index > 0) {
      updateImage(index - 1);
    }
  };
  overlay.appendChild(prevButton);

  // Criar botão de próxima
  const nextButton = document.createElement('button');
  nextButton.textContent = '»';
  nextButton.style.cssText = 'position: absolute; right: 20px; top: 50%; transform: translateY(-50%); z-index: 1001; font-size: 22px; color: green; font-weight: bold;';
  nextButton.onclick = function() {
    if (index < galleryItems.length - 1) {
      updateImage(index + 1);
    }
  };
  overlay.appendChild(nextButton);

  // Desabilitar botões se necessário
  prevButton.disabled = index === 0;
  nextButton.disabled = index === galleryItems.length - 1;

  // Adicionar o overlay ao body
  document.body.appendChild(overlay);
}

// Adicionar evento de clique para cada imagem da galeria
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
  item.onclick = function() {
    const highQualitySrc = item.querySelector('.source-2').srcset;
    openFullscreen(highQualitySrc, index, galleryItems);
  };
});