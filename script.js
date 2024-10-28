// Função que troca a seção visível
function showSection(sectionId) {
    // Primeiro, esconde todas as seções
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active'); // Remove a classe 'active' para ocultar
    });

    // Mostra a seção que foi clicada, adicionando a classe 'active'
    document.getElementById(sectionId).classList.add('active');
}

// Ao carregar a página, a seção "Início" é mostrada por padrão
document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio'); // Mostra a seção "Início" automaticamente
});
