const navToggle = document.getElementsByClassName("fa-bars");
const navMenu = document.getElementsByClassName("navmenu");

navToggle[0].addEventListener("click", function () {
    navMenu[0].classList.toggle("show");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzxxV-1Mk5of1CwN5snsHeERL9vTIH4WQDqpMWnW9539oa4hggVThC-p9Cto-yhkj8y4g/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })