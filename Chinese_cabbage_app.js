$(function(){
    let mobileSearchIcon = document.querySelector(".mobile-search");
    let mobileSearchscreen = document.querySelector("#search");
    let searchClose = document.querySelector(".search-close");

    mobileSearchIcon.addEventListener('click', function(){
        mobileSearchscreen.classList.add("search_active");
    });

    searchClose.addEventListener('click', function(){
        mobileSearchscreen.classList.remove("search_active");
    })

    let incrementBtn = document.querySelector(".inc");
    let decrementBtn = document.querySelector(".dec");
    let amount = document.querySelector(".amount");
    let result = document.querySelector(".result");

    incrementBtn.addEventListener("click", function () {

  if (Number(result.value) + 1 < 11) { 
    result.value = Number(result.value) + 1;
    amount.value = (result.value)*17.28;

    decrementBtn.style.cursor = "pointer";

  }else{
    
    incrementBtn.style.cursor = "not-allowed";
  }

});


decrementBtn.addEventListener('click', function(){
    
  if( Number(result.value) > 1){
   
    result.value =  Number(result.value) - 1;
    amount.value = (amount.value)-17.28;

    incrementBtn.style.cursor = "pointer";

  }else{

    decrementBtn.style.cursor = "not-allowed";
  }

});

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      centerPadding: "0px",
      focusOnSelect: true,
      vertical:true,
      arrows: true,
      nextArrow: `<span class="down_arrow"><iconify-icon icon="formkit:down" width="24" height="16"></iconify-icon></span>`,
      prevArrow: `<span class="up_arrow"><iconify-icon icon="formkit:up" width="24" height="16"></iconify-icon></span>`,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            vertical: false,
            slidesToShow: 4,
            infinite: true,
            dots:false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500
          },
        },
      ],
    });

    $(function(){
      $(".example").imagezoomsl();
    });
    

    $(".product_parent_sliders").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    });

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    const btn = document.getElementById("toggleBtn");
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });

    $('.category-button').categoryFilter();

    $('.venobox').venobox({
          // settings here
    });

    const buttons = document.querySelectorAll(".category-button");
    const contents = document.querySelectorAll(".filter");

    function showContent(filter) {
      // hide all
      contents.forEach(c => c.style.display = "none");
      // show selected
      document.querySelectorAll("." + filter).forEach(c => c.style.display = "block");

      // update button active state
      buttons.forEach(b => b.classList.remove("active"));
      document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
    }

    // Add click event
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        showContent(filter);
      });
    });

    // Set default view (cat)
    showContent("cat");

})