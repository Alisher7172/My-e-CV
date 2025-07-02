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
