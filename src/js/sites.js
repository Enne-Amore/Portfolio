let slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
    showSlides(slideIndex = n)
}

// Mostrar cada tela
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

// Focagem da tela
let iframes = document.querySelectorAll("iframe")
iframes.forEach((iframe) => {
  // Focar
  iframe.addEventListener("focusin", () => {
    iframe.style.border = "2px solid white"
  })
  
  // Desfocar
  iframe.addEventListener("blur", () => {
    iframe.style.border = "0px"
  })

  // Rolar à tela ao clicar
  let a_btn_responsive = document.querySelectorAll(".a-btn-responsive")
  a_btn_responsive.forEach((btn) => {
    btn.addEventListener("click", () => {
      iframe.scrollIntoView({ behavior: "smooth" })
      iframe.focus()
    })
  })
})
