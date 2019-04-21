const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".outside-overlay");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".sidebar-close");
const clickable = document.querySelector(".clickable");


hamburger.addEventListener('click', (e) => {
    overlay.style.display = "flex";
    clickable.style.display = "block"
    sidebar.classList.add("sidebarAnim");
})





close.addEventListener("click", (e) => {
    sidebar.classList.add("slideOutAnim");
    setTimeout(() => {
    sidebar.classList.remove("sidebarAnim");
    sidebar.classList.remove("slideOutAnim");    
    overlay.style.display = "none";
    clickable.style.display = "none"
    },700)
})

clickable.addEventListener("click", (e) => {
    sidebar.classList.add("slideOutAnim");
    setTimeout(() => {
    sidebar.classList.remove("sidebarAnim");
    sidebar.classList.remove("slideOutAnim");    
    overlay.style.display = "none";
    clickable.style.display = "none"
    },700)
})