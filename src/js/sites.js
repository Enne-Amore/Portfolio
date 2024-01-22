let slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let telas = document.querySelectorAll(".tela")
    const icones = document.querySelectorAll(".icone")

    // Remove a classe 'aparecida' de todas as folhas
    telas.forEach((tela) => {
      tela.classList.remove('aparecida')
    })
    
    if (n > telas.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = telas.length;
    }
    
    // Adiciona a classe 'aparecida' à folha correspondente
    telas[slideIndex - 1].classList.add('aparecida')

    // Remove a classe 'selecionada' de todas as bolinhas
    icones.forEach((icone) => {
        icone.classList.remove('selecionado')
    })

    // Adiciona a classe 'selecionada' à bolinha correspondente
    icones[slideIndex - 1].classList.add('selecionado')
}
