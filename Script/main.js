// Criando o observador
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Verifica se o elemento está visível
        if (entry.isIntersecting) {
            // Quando o elemento entra na tela, adiciona a classe para ativar a animação de fade-in
            entry.target.classList.add('visivel');
            // Para de observar após a animação
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });  // O 0.5 significa que 50% do elemento precisa estar visível

// Selecionando todos os elementos que devem ser observados
const elementos = document.querySelectorAll('.contador'); // Seleciona a div inteira

// Iniciando a observação para cada elemento
elementos.forEach(elemento => {
    observer.observe(elemento);
});
