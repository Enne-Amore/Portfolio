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

        // Nomes das páginas navegáveis por tab
        for (let i = 0 ; i <= 5 ; i++) {
            let a = document.getElementsByTagName('a')[i]
            a.style.display = 'flex'
            btnFecharMenu.style.display = 'flex'
        }
    }
})

// Acesso ao menu usando o teclado
menu.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()

        // Deixando a primeira opção do menu focalizada ao abrí-lo
        const inicio = document.getElementsByTagName('a')[0]
        inicio.focus()

    }
})

// Sair do menu
// Chamada das tags por ID's
const btnFecharMenu = window.document.getElementById('fechar-menu')
const titulo = window.document.getElementById('titulo')
const nav = window.document.getElementById('nav')
const conteudo = window.document.getElementById('conteudo')
const rodape = window.document.getElementById('final')

// Adicionar o evento nelas
btnFecharMenu.addEventListener('click', sairDoMenu)
titulo.addEventListener('click', sairDoMenu)
nav.addEventListener('click', sairDoMenu)
conteudo.addEventListener('click', sairDoMenu)
rodape.addEventListener('click', sairDoMenu)

// Aplicando função de sair do menu
function sairDoMenu() {
    areas.style.left = '-80%'
    areas.style.opacity = '0%'
    menu.style.transform = 'rotate(0deg)'
    menu.style.boxShadow = '0px 0px 0px 0px #a479c0'

    // Nomes das páginas não navegáveis por tab
    for (let i = 0 ; i <= 5 ; i++) {
        let a = document.getElementsByTagName('a')[i]
        a.style.display = 'none'
        btnFecharMenu.style.display = 'none'
    }
}