const topo = document.getElementById('topo')

topo.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 1000) {
        topo.style.display = 'flex'
    } else if (window.scrollY > 1800) {
        topo.style.display = 'none'
    } else {
        topo.style.display = 'none'
    }
    
}

ocultar()