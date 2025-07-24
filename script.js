const card = document.querySelector(".card_logo img");
const cardContent = document.querySelector(".card_content");
const toogle_content = document.querySelector(".toggle_section");
const toggle_i = document.querySelector(".toggle i");

function toogle() {
  const header = document.querySelector(".header_section");
  if (header.classList.contains("toogle_disabled")) {
    card.style.display = "none";
    cardContent.style.display = "none";
    toogle_content.style.display = "block";
    toggle_i.classList.remove("fa-bars");
    toggle_i.classList.add("fa-xmark");
    header.classList.remove("toogle_disabled");
  } else {
    card.style.display = "block";
    cardContent.style.display = "block";
    header.classList.add("toogle_disabled");
    toogle_content.style.display = "none";
    toggle_i.classList.remove("fa-xmark");
    toggle_i.classList.add("fa-bars");
  }
}
