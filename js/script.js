$(document).ready(function () {
  const mMenuBtn = $(".m-menu-btn");
  const mMenu = $(".m-menu");
  const tabs = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tabs.on("click", function () {
    tabs.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).data("target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      992: {
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 4,
      },
      768: {
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 2,
      },
      320: {
        autoplay: false,
        slidesPerView: 1,
        navigation: {
          nextEl: ".btn-next",
        },
      },
    },
  });
});
