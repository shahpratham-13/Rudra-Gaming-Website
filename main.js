const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");
dropdownMenu.addEventListener("click",()=>{
    dropdown.classList.toggle("toggleDropdown");
    dropdown.style.opacity = "1";
    dropdownMenu.children[1].classList.toggle("iconRotate");
});