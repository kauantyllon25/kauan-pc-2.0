let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let h2 = document.querySelector('h2');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
    list.style.setProperty('--calculation', active === 0 ? '-1' : '-1');
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
};

nextButton.onclick = () => {
    list.style.setProperty('--calculation', active === lastPosition ? '1' : '1');
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
};

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    let cor1 = '#00FF00'; // Verde
    let cor2 = '#800080'; // Roxo
    let cor3 = '#FFFFFF'; // Branco
    let cor4 = '#A52A2A'; // Vinho
    let cor5 = '#000000'; // Preto
    let cor6 = '#00FF00'; // Verde 

    let activeItem = items[active];
    let activeDescription = activeItem.querySelector('.description');
    let activeCarInfo = activeItem.querySelector('.car-information');
    let activeH2 = activeItem.querySelector('h2');

    let activeLi = indicator.querySelectorAll('ul li')[active];
    indicator.querySelectorAll('ul li').forEach((li) => {
        li.style.backgroundColor = ''; 
    });

    if (active === 0) {
        container.style.backgroundImage = 'radial-gradient(circle, #000000, #000000)';
        activeDescription.style.color = cor6; // Texto em verde claro
        activeCarInfo.style.color = cor6; // Texto em verde claro
        activeH2.style.color = cor6; // Texto em verde claro
        activeLi.style.backgroundColor = cor3;
    } else if (active === 1) {
        container.style.backgroundImage = 'radial-gradient(circle, #ff6347, #8b0000)';
        activeDescription.style.color = cor5; // Texto em preto
        activeCarInfo.style.color = cor5; // Texto em preto
        activeH2.style.color = cor5; // Texto em preto
        activeLi.style.backgroundColor = cor3; // Barra em preto
    } else if (active === 2) {
        container.style.backgroundImage = 'radial-gradient(circle, #191970, #4b0082)';
        activeDescription.style.color = cor3;
        activeCarInfo.style.color = cor3;
        activeH2.style.color = cor3;
        activeLi.style.backgroundColor = cor3;
    }

    items[active].classList.add('active');
}

// Inicializa o primeiro item como ativo
setSlider();




// Função para abrir o modal com a imagem
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");
  
    modal.style.display = "block"; // Exibe o modal
    modalImage.src = imageSrc; // Atribui o caminho da imagem clicada ao modal
    caption.innerHTML = imageSrc.split('/').pop(); // Exibe o nome da imagem (opcional)
  }
  
  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Esconde o modal
  }
  


  function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.src;
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  

  function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.src;
  
    // Adiciona um ouvinte para fechar o modal com a tecla Esc
    document.addEventListener("keydown", handleEscClose);
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  
    // Remove o ouvinte da tecla Esc quando o modal é fechado
    document.removeEventListener("keydown", handleEscClose);
  }
  
  function handleEscClose(event) {
    // Verifica se a tecla pressionada é a "Esc"
    if (event.key === "Escape") {
      closeModal();
    }
  }
  


  function showPart(partId) {
    // Oculta todas as partes
    document.querySelectorAll('.info-display').forEach((part) => {
      part.classList.remove('active');
    });
  
    // Exibe apenas a parte selecionada
    document.getElementById(partId).classList.add('active');
  }
  
  // Exibe a primeira parte por padrão
  showPart('part1');
  
   


  // Array of image URLs for the banner
const bannerImages = [
  "BannerUL/assets/img/Email Header - Class.jpeg",
  "BannerUL/assets/img/Email Header2 - Class.jpeg",
  "BannerUL/assets/img/Email Header3 - Class.jpeg",
  "BannerUL/assets/img/Email Header4 - Class.jpeg"
];

// Index to track the current image
let currentIndex = 0;

// Function to change the banner image
function changeBannerImage() {
const bannerImageElement = document.getElementById('bannerImage');
currentIndex = (currentIndex + 1) % bannerImages.length;
bannerImageElement.src = bannerImages[currentIndex];
}

// Change banner image every 3 seconds
setInterval(changeBannerImage, 2000);

