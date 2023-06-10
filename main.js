// Dropdown menu JS
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");
const mousenter = ()=>{
    dropdown.style.height = "17rem"
    dropdown.style.opacity = "1"
    dropdownMenu.children[0].children[1].style.transform = "rotate(180deg)";
}
const mouseleave = ()=>{
        dropdown.style.height = "0"
    dropdown.style.opacity = "0"
    dropdownMenu.children[0].children[1].style.transform = "rotate(0deg)";
}
dropdownMenu.children[0].addEventListener("mouseenter",mousenter);
dropdown.addEventListener("mouseenter",mousenter);
dropdownMenu.children[0].addEventListener("mouseleave",mouseleave);
dropdown.addEventListener("mouseleave",mouseleave);