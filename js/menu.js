// Abrir o menu
// Chamando a tag com uma constante
const menu = document.getElementById('menu')

// Aplicando a função de abrir o menu
menu.addEventListener('click', () => {
    if (areas.style.left = '-80%') {
        areas.style.left = '0'
        areas.style.opacity = '100%'
        menu.style.transform = 'rotate(-360deg)'
        menu.style.boxShadow = '1px 1px 1px 1px #a479c0'
    }
})

// Sair do menu
// Chamada das tags por ID's
const titulo = window.document.getElementById('titulo')
const nav = window.document.getElementById('nav')
const conteudo = window.document.getElementById('conteudo')

// Adicionar o evento nelas
titulo.addEventListener('click', sairDoMenu)
nav.addEventListener('click', sairDoMenu)
conteudo.addEventListener('click', sairDoMenu)

// Aplicando função de sair do menu
function sairDoMenu() {
    areas.style.left = '-80%'
    areas.style.opacity = '0%'
    menu.style.transform = 'rotate(0deg)'
    menu.style.boxShadow = '0px 0px 0px 0px #a479c0'
}