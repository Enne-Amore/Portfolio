window.sr = ScrollReveal({ reset: true });

sr.reveal('#conteúdo', {duration: 100});

sr.reveal('.parte');

sr.reveal('.txt');

if(window.innerWidth < 1133) {
    sr.reveal('.video');
} else {
    sr.reveal('.capas');
}

sr.reveal('.iguali');

sr.reveal('.secao');

sr.reveal('.especial');