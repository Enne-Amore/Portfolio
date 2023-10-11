// Aplicando a função de aparecer
window.sr = ScrollReveal({ reset: true });

// Chamando as tags para aparecerem
sr.reveal('#conteudo', {duration: 100});
sr.reveal('.parte');
sr.reveal('.txt');
sr.reveal('.capas');
sr.reveal('.imagens');
sr.reveal('.secao');
sr.reveal('.especial');

// Para telas menores
if (innerWidth <= 1200) {
    sr.reveal('.video');
    sr.reveal('.iguali');
}