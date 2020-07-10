const icon = document.querySelectorAll('.navbar__li');
const dropdown = document.querySelectorAll('.dropdown-popup');
const closeDropdown = document.querySelectorAll('.search-dropdown__svg');

icon.forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();

      dropdown.forEach(element => {
         element.classList.remove('open')
         console.log('closing...')
      });

      let openDropdown = document.getElementById(element.dataset.targetId)
      openDropdown.classList.add('open')
   })
})

closeDropdown.forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();

      dropdown.forEach(element => {
         element.classList.remove('open');
      })
   });
})






