// Chamada de elementos globais
const tela = document.querySelector('iframe')
let icones = document.querySelectorAll('.icone')

// Ao selecionar um ícone de site
icones.forEach((icone) => {
  icone.addEventListener('click', () => {
    removerSelecaoDeIcone()

    icone.classList.add('selecionado')

    const tela = trocarDeTela(icone)

    focarTela(tela)

    trocarUrlDesktop(icone)

    trocarUrlMobile(icone)

    trocarUrlSite(icone)

    trocarUrlRepository(icone)
  })
})

// Ao selecionar um ícone de responsividade
let a_btn_responsive = document.querySelectorAll(".a-btn-responsive")
a_btn_responsive.forEach((btn) => {
  btn.addEventListener("click", () => {
    focarTela(tela)
  })
})

// Funções das seleções
function trocarUrlRepository(icone) {
  const repository = document.querySelector('#repository')
  repository.href = icone.getAttribute('data-repository')
}

function trocarUrlSite(icone) {
  const site = document.querySelector('#site')
  site.href = icone.getAttribute('data-site')
}

function trocarUrlMobile(icone) {
  const mobile = document.querySelector('#mobile')
  mobile.href = icone.getAttribute('data-mobile')
}

function trocarUrlDesktop(icone) {
  const desktop = document.querySelector('#desktop')
  desktop.href = icone.getAttribute('data-desktop')
}

function focarTela(tela) {
  tela.scrollIntoView({ behavior: "smooth" })
  tela.focus()
  tela.addEventListener("focusin", () => {
    tela.style.border = "2px solid white"
  })
  tela.addEventListener("blur", () => {
    tela.style.border = "0px"
  })
}

function trocarDeTela(icone) {
  tela.src = icone.getAttribute('data-desktop')
  return tela
}

function removerSelecaoDeIcone() {
  const iconeSelecionado = document.querySelector('.selecionado')
  iconeSelecionado.classList.remove('selecionado')
}

