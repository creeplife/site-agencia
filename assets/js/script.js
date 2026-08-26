// #region AUTODIGIT

function autoDigit(id, frases) {

    const el = document.getElementById(id);

    if (!el) return;

    const VELOCIDADE_DIGITACAO = 70;
    const VELOCIDADE_APAGAR = 35;
    const PAUSA_FRASE = 1800;
    const PAUSA_PROXIMA = 400;

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
}


autoDigit("autodigit", [
    "Sua ideia. Nosso código.",
    "Conectando negócios a novas possibilidades."
]);


autoDigit("autodigit1", [
    "Fale com a NEXO",
    "Vamos conversar?",
    "Comece seu projeto",
    "Conecte-se com a NEXO"
]);

// #endregion



// #region SWIPER

const swiperEl = document.querySelector('.mySwiper');

if (swiperEl) {

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
}

// #endregion



// #region MENU HAMBURGUER

const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('header nav');

if (menuIcon && nav) {

    menuIcon.addEventListener('click', () => {

        nav.classList.toggle('ativo');

        menuIcon.classList.toggle('bx-menu');
        menuIcon.classList.toggle('bx-x');

    });

}

// #endregion



// AOS
AOS.init();
