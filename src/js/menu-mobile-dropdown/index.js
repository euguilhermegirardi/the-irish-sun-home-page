const icon = document.querySelectorAll('.navbar__li');
const dropdown = document.querySelectorAll('.dropdown');


icon.forEach(element=> {
   element.addEventListener('click', (e) => {
      e.preventDefault();

      // close all before open one dropdown.
      dropdown.forEach(element => {
         element.classList.remove('opened');
         // console.log('removed')
      });

      let showDiv = document.getElementById(element.dataset.targetId)
      showDiv.classList.toggle('opened');

      if(showDiv === classList.includes('opened')) {
         console.log('wasda')
      } return;

   })
})






