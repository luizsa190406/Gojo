function tocarVoz(caminhoAudio) {
    const voz = new Audio(caminhoAudio);
    voz.play();
}

// Efeito de clique nos botões da home
const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let click = new Audio('audio/click.mp3');
        click.play();
    });
});

// Animações de entrada
window.onload = () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('mostrar');
    });
    document.querySelectorAll('.zoom-in').forEach(el => {
        el.classList.add('mostrar-zoom');
    });
};