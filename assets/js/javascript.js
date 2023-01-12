

let headerBtn = document.querySelector(".header__menu-bar");
let mobileMenu = document.querySelector(".mobile-menu");
let closeMobileMenu = document.querySelector(".mobile-menu--close");
let menuBackDrop = document.querySelector(".menu-backdrop");
headerBtn.onclick=()=>{
    mobileMenu.classList.toggle("mobile-menu--open");
    menuBackDrop.classList.toggle("menu-backdrop--visibility");
}
closeMobileMenu.onclick =()=>{
    mobileMenu.classList.toggle("mobile-menu--open");
    menuBackDrop.classList.toggle("menu-backdrop--visibility");
}
menuBackDrop.onclick = ()=>{
    mobileMenu.classList.toggle("mobile-menu--open");
    menuBackDrop.classList.toggle("menu-backdrop--visibility");
}
let linkDownBtns = document.querySelectorAll(".link__down__icon");
for(let linkDownBtn of linkDownBtns){
    linkDownBtn.onclick=(e)=>{
        let includeLinkDown = e.target.parentElement.parentElement;
        includeLinkDown.classList.toggle("showNav");
        linkDownBtn.classList.toggle("rotateUp");
    }
}


const li = document.querySelectorAll(".headerMenu__link");
const sec = document.querySelectorAll("section");

function activateMenu(){
    let len = sec.length;
    while(--len && window.scrollY+200< sec[len].offsetTop){}
    li.forEach(ltx=>ltx.classList.remove("activeSection"));
    li[len].classList.add("activeSection");
}
activateMenu();
window.addEventListener("scroll",activateMenu);

// Count down


    function countDown(){
        let countDownDate = new Date("Jan 22, 2023 ").getTime();
        let x = setInterval(function(){
            let now = new Date().getTime();
            let distance = countDownDate - now;
            const timeOneDay = (1000 * 60 * 60 * 24);
            let days = Math.floor(distance / timeOneDay);
            let hours = Math.floor((distance % timeOneDay) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.querySelector(".timecount-box__number__day").innerHTML=days;
            document.querySelector(".timecount-box__number__hour").innerHTML=hours;
            document.querySelector(".timecount-box__number__minute").innerHTML=minutes;
            document.querySelector(".timecount-box__number__seccond").innerHTML=seconds;
         
        },1000);
        // clearInterval(x);
    }
countDown();

// 

