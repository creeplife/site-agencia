// #region Autodigit 



const frases = [
  "Sua idéia. Nosso código.",
  "Conectando negócios a novas possibilidades."
];

const el = document.getElementById('autodigit');

const VELOCIDADE_DIGITACAO = 70;   // ms por caractere ao escrever
const VELOCIDADE_APAGAR = 35;      // ms por caractere ao apagar
const PAUSA_FRASE = 1800;          // pausa com frase completa
const PAUSA_PROXIMA = 400;         // pausa antes de escrever a próxima

let fraseAtual = 0;
let charAtual = 0;
let apagando = false;

function loop() {
  const textoAlvo = frases[fraseAtual];

  if (!apagando) {
    charAtual++;
    el.textContent = textoAlvo.slice(0, charAtual);

    if (charAtual === textoAlvo.length) {
      apagando = true;
      setTimeout(loop, PAUSA_FRASE);
      return;
    }
    setTimeout(loop, VELOCIDADE_DIGITACAO);
  } else {
    charAtual--;
    el.textContent = textoAlvo.slice(0, charAtual);

    if (charAtual === 0) {
      apagando = false;
      fraseAtual = (fraseAtual + 1) % frases.length;
      setTimeout(loop, PAUSA_PROXIMA);
      return;
    }
    setTimeout(loop, VELOCIDADE_APAGAR);
  }
}

loop();


// Aqui vamos iniciar o loop 



// #endregion 


// #region swiper 


const swiperEl = document.querySelector('.mySwiper');

Object.assign(swiperEl, {
    slidesPerView: 3,
    centeredSlides: true,


    spaceBetween: 30,

    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
                pauseOnMouseEnter: true

    },

    mousewheel: true
});

swiperEl.initialize();


// #endregion 



//#region menu hamburguer Responsivel
//seleciona o icone hamburguer pelo id que colocamos no html

const menuIcon = document.getElementById('menu-icon');

//seleciona o nav (o menu com os links) que fica dentro do header
const nav = document.querySelector('header nav');

//Quando houver o click no icone do header a função executa ativando o nav
menuIcon.addEventListener('click', () => {

  //Liga ou desliga a class ativo no nav (é ela que faz o menu aparecer/sumir no media.css)
  nav.classList.toggle('ativo');

  // troca o icone de Humbuguer para X quando o menu abre e quando o volta fechado
  // quando estiver desligado
  menuIcon.classList.toggle('bx-menu');

  // quando estiver ligado
  menuIcon.classList.toggle('bx-x');


});

//endregion


// Inicia AOS
AOS.init();