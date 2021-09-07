// hamburger menu animation

const btnhamburger = document.querySelector("#btnHamburger");
const landingPage = document.querySelector(".landingPage");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnhamburger.addEventListener("click", animationHamburger);

function animationHamburger(){
    if(landingPage.classList.contains("open")){
        landingPage.classList.remove("open");
        body.classList.remove("noscroll");
        fadeElems.forEach(function(elements){
            elements.classList.remove("fade-in");
            elements.classList.add("fade-out");
        });
    }
    else{
        landingPage.classList.add("open");
        body.classList.add("noscroll");
        fadeElems.forEach(function(elements){
            elements.classList.remove("fade-out");
            elements.classList.add("fade-in");
        });
    }
}

// slick fade animation
$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
});

// slick agent card autoplay
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    infinite:true,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  });
           
//   slick animation for testimonial
$('.tAutoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    infinite:true,
    dots:true
});
