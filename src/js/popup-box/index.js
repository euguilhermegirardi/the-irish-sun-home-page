const search = document.querySelectorAll('.navbar-desktop__search-icons');
const popup = document.querySelectorAll('.popup-box');
const close = document.querySelectorAll('.popup-box__svg');

search.forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();

      popup.forEach(element => {
         element.classList.remove('open')
      });

      let open = document.getElementById(element.dataset.targetId)
      open.classList.add('open');
   });
})

close.forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();

      popup.forEach(element => {
         element.classList.remove('open');
      })
   });
})

