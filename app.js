$(function(){
    let mobileSearchIcon = document.querySelector(".mobile-search");
    let mobileSearchscreen = document.querySelector("#search");
    let searchClose = document.querySelector(".search-close")

    mobileSearchIcon.addEventListener('click', function(){
        mobileSearchscreen.classList.add("search_active");
    });

    searchClose.addEventListener('click', function(){
        mobileSearchscreen.classList.remove("search_active");
    })

    $(".sliders").slick({
      dots: true,
      slidesToShow: 1,
      arrows: true,
      nextArrow: `<span class="next"><iconify-icon icon="mingcute:arrow-right-line" width="24" height="24"></iconify-icon></span>`,
      prevArrow: `<span class="prev"><iconify-icon icon="lets-icons:arrow-left" width="24" height="24"></iconify-icon></span>`,
      autoplay: true,
      autoplaySpeed: 2500,
    });

})