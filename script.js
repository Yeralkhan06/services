document.addEventListener('DOMContentLoaded', ()=>{
  // Анимация для .fade-in элементов
  document.querySelectorAll('.fade-in').forEach((el,i)=>{
    setTimeout(()=>{
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 + i*200);
  });

  // Анимация для карточек на странице услуг
  document.querySelectorAll('.card').forEach((card,i)=>{
    setTimeout(()=>{
      card.style.transition = 'opacity .5s ease, transform .5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 400 + i*200);
  });
});

