 const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      items.forEach(i => {
        if (i !== item) {
          i.classList.remove('ativo');
        }
      });
      item.classList.toggle('ativo');
    });
  });



document.getElementById("anoAtual").textContent = new Date().getFullYear();