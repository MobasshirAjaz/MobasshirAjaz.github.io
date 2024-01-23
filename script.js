const navToggle = document.getElementsByClassName("fa-bars");
const navMenu = document.getElementsByClassName("navmenu");

navToggle[0].addEventListener("click", function () {
  navMenu[0].classList.toggle("show");
});


/*Form Submission Code */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzxxV-1Mk5of1CwN5snsHeERL9vTIH4WQDqpMWnW9539oa4hggVThC-p9Cto-yhkj8y4g/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

/*Form Submission Code */


const isMobile = window.matchMedia("screen and (min-width: 1024px)").matches;

if(!isMobile){
  console.log("Mobile");
  const project_cards=document.getElementsByClassName("project_card");
  let isOpen=new Array(project_cards.length).fill(0);

  for(let i=0;i<project_cards.length;i++){
    project_cards[i].addEventListener("click",()=>{
      if(isOpen[i]){
        const headings = project_cards[i].querySelector(".card_headings");
        const hidden = project_cards[i].querySelector(".card_hidden");
  
        headings.style.display="flex";
        hidden.style.display="none";
        isOpen[i]=0;
      }
      else{
        const headings = project_cards[i].querySelector(".card_headings");
        const hidden = project_cards[i].querySelector(".card_hidden");
  
        console.log("Headings=",headings);
        headings.style.display="none";
        hidden.style.display="flex";
        isOpen[i]=1;
      }
    })
  }
}
else{
  const hidden=document.querySelectorAll(".card_hidden");

  hidden.forEach((card)=>{
    card.addEventListener("click",()=>{
      let url=card.querySelector("a");
      console.log(url);
      console.log(url.href);
      window.open(url.href, '_blank').focus();
    })})
  }


