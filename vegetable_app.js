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

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    

    $('.pagination').slick({
    centerMode: false,
    centerPadding: '20px',
    slidesToShow: 7,
    arrows: true ,
    dot: true,
    nextArrow: `<span class="next"><iconify-icon icon="material-symbols-light:keyboard-arrow-right" width="24" height="24"></iconify-icon></span>`,
    prevArrow: `<span class="prev"><iconify-icon icon="material-symbols-light:keyboard-arrow-left" width="24" height="24"></iconify-icon></span>`,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
    ]
    });

    $('.radio').categoryFilter();

    $('.category-button').categoryFilter();
    

})
