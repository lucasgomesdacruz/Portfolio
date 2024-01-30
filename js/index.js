var paragrafo = document.querySelector('#text')
var cursor = document.querySelector('.cursor')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
  paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      paragrafo.innerHTML = texto.charAt(index) 
    } else {
      paragrafo.innerHTML += texto.charAt(index) 
    }

    paragrafo.innerHTML += '|'

    index++
    setTimeout(escrever, 50)

  } 
}
escrever()

if (window.SimpleAnime) {
  new SimpleAnime();
}

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
      const windowMetade = window.innerHeight * 0.1;

      function animaScroll() {
          sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top - windowMetade;
              if(sectionTop < 0) {
                  section.classList.add('ativo');
              }
          })
      }

      window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();