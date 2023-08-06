const menu = document.getElementById('menu')

function abrirMenu() {
    if (areas.style.left = '-70%') {
        areas.style.left = '0'
        areas.style.opacity = '100%'
        menu.style.transform = 'rotate(-360deg)'
        menu.style.boxShadow = '1px 1px 1px 1px #a479c0'
    }
}
function sairDoMenu() {
    areas.style.left = '-70%'
    areas.style.opacity = '0%'
    menu.style.transform = 'rotate(0deg)'
    menu.style.boxShadow = '0px 0px 0px 0px #a479c0'
}