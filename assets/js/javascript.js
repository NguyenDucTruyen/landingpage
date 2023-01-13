

let headerBtn = document.querySelector(".header__menu-bar");
let mobileMenu = document.querySelector(".mobile-menu");
let closeMobileMenu = document.querySelector(".mobile-menu--close");
let menuBackDrop = document.querySelector(".menu-backdrop");


function showAndHideMobileMenu(){
    headerBtn.onclick=()=>{
        mobileMenu.classList.toggle("mobile-menu--open");
        menuBackDrop.classList.toggle("menu-backdrop--visibility");
        closeMobileMenu.classList.toggle("spinActive");
    }
    closeMobileMenu.onclick =()=>{
        mobileMenu.classList.toggle("mobile-menu--open");
        menuBackDrop.classList.toggle("menu-backdrop--visibility");
        closeMobileMenu.classList.toggle("spinActive");
    }
    menuBackDrop.onclick = ()=>{
        mobileMenu.classList.toggle("mobile-menu--open");
        menuBackDrop.classList.toggle("menu-backdrop--visibility");
        closeMobileMenu.classList.toggle("spinActive");
    }
}
showAndHideMobileMenu();

let linkDownBtns = document.querySelectorAll(".link__down__icon");
function sidebarLiDown(){
    for(let linkDownBtn of linkDownBtns){
        linkDownBtn.onclick=(e)=>{
            let includeLinkDown = e.target.parentElement.parentElement;
            includeLinkDown.classList.toggle("showNav");
            linkDownBtn.classList.toggle("rotateUp");
        }
    }
}
sidebarLiDown();



function activateMenu(){
    const li = document.querySelectorAll(".headerMenu__link");
    const sec = document.querySelectorAll("section");
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
// countDown();

let saleTabNavBtns = document.querySelectorAll(".sale__tabNav__btn");
function chooseSaleTitle(){
    for(let i=0;i<saleTabNavBtns.length;i++){
        saleTabNavBtns[i].onclick=()=>{
            saleTabNavBtns[i].classList.add("choosedBtn");
            if(i==0){
                saleTabNavBtns[1].classList.remove("choosedBtn");
                document.querySelector(".sale__title1").style.display='inline-block';
                document.querySelector(".sale__title2").style.display='none';
            }
            if(i==1){
                saleTabNavBtns[0].classList.remove("choosedBtn");
                document.querySelector(".sale__title2").style.display='inline-block';
                document.querySelector(".sale__title1").style.display='none';
            }
        }
        
    }
}
chooseSaleTitle();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
        // console.log(entry.target)
      } else {
        entry.target.classList.remove("fadeIn");
      }
    });
  });
  
  let show = document.querySelectorAll(".animationFadeTwoSide")
  show.forEach((col)=>{
    observer.observe(col)
  })

  const obser = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeUp");
        // console.log(entry.target)
      } else {
        entry.target.classList.remove("fadeUp");
      }
    });
  });
  
  let go = document.querySelectorAll(".animationFadeUp")
  go.forEach((col)=>{
    obser.observe(col)
  })

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 180 ||
      document.documentElement.scrollTop > 180
    ) {
      document.querySelector(".headerBar").classList.add("fixedHeader");
    } else {
      document.querySelector(".headerBar").classList.remove("fixedHeader");
    }
  });