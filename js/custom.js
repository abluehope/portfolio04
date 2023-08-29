$(function () {
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
