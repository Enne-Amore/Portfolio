// Aplicando a função de aparecer
window.sr = ScrollReveal({ reset: true });

// Chamando as tags para aparecerem
sr.reveal('.secao', {
    distance: '15px',
    duration: 1000
});
sr.reveal('.txt', {
    distance: '15px',
    duration: 1000
});
sr.reveal('.especial', {
    rotate: { x:0, y:80, z:0 },
    duration: 1500,
    distance: '5px'
});
sr.reveal('.parte');

// Conteúdo dinâmico
sr.reveal('.sites', {
    distance: '15px',
    duration: 1000
});
sr.reveal('.iguali', {
    scale: 0.5,
    duration: 600,
    easing: 'ease-out',
});
sr.reveal('.video', {
    scale: 0.5,
    duration: 600,
    easing: 'ease-out',
});

// Rodapé
sr.reveal('.table', {
    distance: '10px',
    duration: 1000
});
sr.reveal('.list', {
    distance: '10px',
    duration: 1000
});
