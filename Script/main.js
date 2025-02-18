document.addEventListener("DOMContentLoaded", function() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('.numero');
        numeros.forEach(numero => {
            const max = parseInt(numero.getAttribute('data-max'));
            let start = 0;
            const increment = Math.ceil(max / 100); // Velocidade da animação
            const intervalo = setInterval(() => {
                start += increment;
                if (start >= max) {
                    start = max;
                    clearInterval(intervalo);
                }
                numero.textContent = `+${start}`;
            }, 20);
        });
    }

    function verificaVisibilidade() {
        const secao = document.querySelector('.contadores');
        const posicao = secao.getBoundingClientRect().top;
        const tela = window.innerHeight;
        if (posicao < tela) {
            animaNumeros();
            window.removeEventListener('scroll', verificaVisibilidade);
        }
    }

    window.addEventListener('scroll', verificaVisibilidade);
});
