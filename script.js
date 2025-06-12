let toggleBtn = document.querySelector('.themeToggle');

toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';

  document.querySelector('.secondary').classList.toggle('toggleBtnClass');
  document.querySelector('.navbar').classList.toggle('glass-effect');
 let icons =  document.querySelectorAll('.icon-card');
 icons.forEach((icon)=>{icon.classList.toggle('glass-effect')});

 
let listItems = document.querySelectorAll('.useList li');
listItems.forEach((item)=>{item.classList.toggle('glass-effect')});
});

// year
const yearSpan = document.querySelector('.year');
let now = new Date();
yearSpan.textContent = now.getFullYear();



// for all icons
const allIcons = document.querySelectorAll('.icon-card');
allIcons.forEach((icon)=>{
  icon.classList.toggle('extraGlass-effect');
})



 // Preloader fade out
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      const content = document.getElementById('main');

      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.style.display = 'none';
        content.classList.add('visible');
      }, 500); // Match this to transition duration
    });



     // Scroll reveal using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });