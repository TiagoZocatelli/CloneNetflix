document.addEventListener('DOMContentLoaded', function() {

    AOS.init();
    const questions = document.querySelectorAll('[data-faq-question]');

    // Seção faq
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})


function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    console.log(elemento);
    const elementopai = elemento.target.parentNode;

    elementopai.classList.toggle(classe);
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}