const botoes = document.querySelectorAll('.botaoEncontro button');
const paginas = document.querySelectorAll('.pagina');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const alvo = botao.getAttribute('data-target');

        // Oculta todas as páginas
        paginas.forEach(pagina => pagina.classList.add('hidden'));

        // Mostra a página correspondente
        if (alvo) {
            const paginaAlvo = document.getElementById(alvo);
            if (paginaAlvo) {
                paginaAlvo.classList.remove('hidden');
            }
        }

        // Remove a classe 'selecionado' de todos os botões
        botoes.forEach(btn => btn.classList.remove('selecionado'));

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add('selecionado');
    });
});

window.addEventListener('DOMContentLoaded', () => {
  const btnInicial = document.querySelector('button[data-target="encontro0"]');
  if (btnInicial) {
    btnInicial.classList.add('selecionado');
  }
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  btn.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});


const toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');



    function toggleMenu() {
      toggle.classList.toggle('ativo');
      sidebar.classList.toggle('aberto');
      overlay.classList.toggle('ativo');
      
    }

    toggle.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', toggleMenu); // fecha ao clicar fora do menu

    