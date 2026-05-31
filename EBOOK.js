const home = document.getElementById('home');
const moradasMenu = document.getElementById('moradasMenu');

document
  .getElementById('openMoradas')
  .addEventListener('click', e => {

    e.preventDefault();

    home.classList.add('hidden');
    moradasMenu.classList.remove('hidden');

    window.scrollTo(0, 0);
  });

const botoesMorada =
  document.querySelectorAll('[data-morada]');

botoesMorada.forEach(btn => {

  btn.addEventListener('click', () => {

    const id = btn.dataset.morada;

    moradasMenu.classList.add('hidden');

    document
      .getElementById(id)
      .classList.remove('hidden');

    window.scrollTo(0, 0);
  });

});

const botoesVoltar =
  document.querySelectorAll('.back-button');

botoesVoltar.forEach(btn => {

  btn.addEventListener('click', () => {

    document
      .querySelectorAll('.morada-screen')
      .forEach(screen => {
        screen.classList.add('hidden');
      });

    moradasMenu.classList.remove('hidden');

    window.scrollTo(0, 0);

  });

});