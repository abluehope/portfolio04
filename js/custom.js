$(function () {
  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  $(".gnb").on("wheel touchmove", function (e) {
    e.preventDefault();
  });

  $(".gnb>ul>li>a").on("click", function (e) {
    if ($(".gnb").hasClass("on")) {
      e.preventDefault();
    }
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find(".sub").slideUp();
  });

  $(".main_full").fullpage({
    anchors: [
      "main",
      "introduct",
      "product",
      "hiyorika",
      "caramel",
      "notice",
      "footer",
    ],
    afterRender: function () {
      setTimeout(function () {
        $(".section").eq(0).addClass("on");
      }, 10);
    },
    onLeave: function (idx, nidx, dir) {
      $(".m_link li")
        .eq(nidx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");

      if (nidx > 1) {
        $(".header").addClass("on");
      } else {
        $(".header").removeClass("on");
      }
      if (dir == "up") {
        $(".header").removeClass("on");
      }
    },
  });

  $(".product_tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".product_tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  const main_slide = new Swiper(".main_slide", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        $(".main_visual .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
      slideChangeTransitionStart: function () {
        $(".main_visual .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_visual .arrows .left").on("click", function () {
    main_slide.slidePrev();
  });
  $(".main_visual .arrows .right").on("click", function () {
    main_slide.slideNext();
  });

  $(".main_visual .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    main_slide.slideTo(idx);
  });

  const basic_slide = new Swiper(".basic_slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      init: function () {
        $(".main_product .basic .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
      slideChangeTransitionStart: function () {
        $(".main_product .basic .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_product .basic .arrows .left").on("click", function () {
    basic_slide.slidePrev();
  });
  $(".main_product .basic .arrows .right").on("click", function () {
    basic_slide.slideNext();
  });

  $(".main_product .basic .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    basic_slide.slideTo(idx);
  });

  const seasonal_slide = new Swiper(".seasonal_slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      init: function () {
        $(".main_product .seasonal .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
      slideChangeTransitionStart: function () {
        $(".main_product .seasonal .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_product .seasonal .arrows .left").on("click", function () {
    seasonal_slide.slidePrev();
  });
  $(".main_product .seasonal .arrows .right").on("click", function () {
    seasonal_slide.slideNext();
  });

  $(".main_product .seasonal .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    seasonal_slide.slideTo(idx);
  });

  const gift_slide = new Swiper(".gift_slide", {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      init: function () {
        $(".main_product .gift .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
      slideChangeTransitionStart: function () {
        $(".main_product .gift .dots li")
          .eq(this.realIndex)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $(".main_product .gift .arrows .left").on("click", function () {
    gift_slide.slidePrev();
  });
  $(".main_product .gift .arrows .right").on("click", function () {
    gift_slide.slideNext();
  });

  $(".main_product .gift .dots li").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    gift_slide.slideTo(idx);
  });
});
