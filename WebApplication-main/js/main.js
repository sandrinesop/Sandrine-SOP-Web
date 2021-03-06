const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");


const navToggler = document.querySelector(".btn")

navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling")
})

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle('active')
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){

        document.querySelector(".overlay").classList.add("active")
        if(e.target.classList.contains("nav-item")){
            toggleNavbar()

        }else{
            hideSection();
            document.body.classList.add("hide-scrolling")
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0)
            document.body.classList.remove("hide-scrolling")
            document.querySelector(".overlay").classList.remove("active")
        },50)
    }
})