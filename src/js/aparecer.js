// Aplicando a função de aparecer
window.sr = ScrollReveal({ reset: true });

// Chamando as tags para aparecerem
sr.reveal('.parte');
sr.reveal('.txt');
sr.reveal('.secao');
sr.reveal('.especial');
sr.reveal('.sites');

// Especificidade para cada tela
if (innerWidth <= 1200) {
    sr.reveal('.video');
    sr.reveal('.iguali');
} else {
    sr.reveal('.capas');
    sr.reveal('.imagens');
}