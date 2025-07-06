let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tabLinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabContents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ----------JS for  menu--------------

let sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

  const scriptURL = '<https://script.google.com/macros/s/AKfycbwWbRf9pUSwk0IYzxOGi22hlO3E8dYzlqY6rk8GzS3r96GhKt4nB0iYdRv0xAAqaTRO_w/exec>'
  const form = document.forms['submit-to-google-sheet']
  const formMessage = document.getElemetById("form-message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        formMessage.innerHTML = "Message sent successfully";
        setTimeout(function(){
          formMessage.innerHtml = "";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })