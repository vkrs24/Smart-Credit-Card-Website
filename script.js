const card = document.querySelector(".card_logo img");
const cardContent = document.querySelector(".card_content");
const toogle_content = document.querySelector(".toggle_section");
const toggle_image = document.querySelector(".toggle img");

function toogle() {
  const header = document.querySelector(".header_section");
  if (header.classList.contains("toogle_disabled")) {
    card.style.display = "none";
    cardContent.style.display = "none";
    toogle_content.style.display = "block";
    toggle_image.src = "/images/x-button.png";
    toggle_image.alt = "Close Menu";
    header.classList.remove("toogle_disabled");
  } else {
    card.style.display = "block";
    cardContent.style.display = "block";
    header.classList.add("toogle_disabled");
    toogle_content.style.display = "none";
    toggle_image.src = "/images/main-menu.png";
    toggle_image.alt = "Close Menu";
  }
}
