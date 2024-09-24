//mobile menu display
$(document).on("click", ".mobile-navigation #close-menu-moblie", function () {
  $("body").removeClass("mobile-nav-on");
});
$(document).on("click", ".toggle-menu, .mobile-menu-overlay", function () {
  $("body").toggleClass("mobile-nav-on");
});
//mobile menu add opener
$(".mobile-menu .toggle-submenu").on("click", function () {
  $(this).prev().slideToggle();
});
//close hint
$(".close-hint").on("click", function () {
  $(this).closest(".hint-bar").slideUp();
});

$(document).ready(function () {
  var isModalShown = false; // flag to ensure modal is shown only once

  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();

    if (scrollHeight > 300 && !isModalShown) {
      $("#suggestion").modal("show");
      isModalShown = true; // Set flag to true to prevent showing again
    }
  });
});

/*========================= Scroll To Top Using Y Practice ==========================*/

let btnUp = document.getElementById("up_btn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    btnUp.classList.add("fade");
  } else {
    btnUp.classList.remove("fade");
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: "smooth",
  });
});

/*=================== products owl carousel ===================*/
$(".products-section .owl-carousel").owlCarousel({
  autoplay: false,
  nav: true,
  dots: false,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: true,
  margin: 20,
  responsive: {
    0: { items: 1.3 },
    768: { items: 2 },
    992: { items: 3 },
    1201: { items: 4 },
  },
});

$(".similar-product .owl-carousel").owlCarousel({
  autoplay: false,
  nav: true,
  dots: false,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: true,
  margin: 20,
  responsive: {
    0: { items: 1.3 },
    768: { items: 2 },
    992: { items: 3 },
    1201: { items: 4 },
  },
});

$(".available_course .owl-carousel").owlCarousel({
  autoplay: false,
  nav: false,
  dots: false,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: false,
  margin: 20,
  responsive: {
    0: { items: 1.3 },
    768: { items: 2 },
    992: { items: 3 },
    1201: { items: 4 },
  },
});

/*=================== testimonials owl carousel ===================*/
$(".testimonials_section .owl-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  dots: true,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: true,
  margin: 20,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
});

/*=================== testimonials owl carousel ===================*/
$(".our-dependence-section .owl-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  dots: false,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: true,
  margin: 20,
  responsive: {
    0: { items: 2 },
    768: { items: 4 },
    992: { items: 6 },
    1201: { items: 8 },
  },
});

/*=================== testimonials owl carousel ===================*/
$(".news_section .owl-carousel").owlCarousel({
  autoplay: false,
  nav: false,
  dots: true,
  navText: [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
  ],
  loop: true,
  margin: 20,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1201: { items: 4 },
  },
});

$(".js-example-basic-multiple").select2();

var distance = $("#fixed-header").offset().top;

function headerSticky() {
  if ($(window).scrollTop() >= distance) {
    $("#fixed-header").addClass("sticky-header");
  } else {
    $("#fixed-header").removeClass("sticky-header");
  }
}

setInterval(() => {
  headerSticky();
}, 100);

/* ===============================  CountDown  =============================== */
$(".countdown").each(function () {
  var content = $(this).html();

  var count = $(this).attr("data-count");

  $(this).countdown(count, function (event) {
    $(this).html(event.strftime(content));
  });
});

/* ===============================  Animated Reveal  =============================== */

var animateReveal = function () {
  var controller = new ScrollMagic.Controller();

  var greveal = $(".gsap-reveal");

  // gsap reveal
  $(".gsap-reveal").each(function () {
    $(this).append('<span class="cover"></span>');
  });
  if (greveal.length) {
    var revealNum = 0;
    greveal.each(function () {
      var cover = $(this).find(".cover");

      var tl = new TimelineMax();

      setTimeout(function () {
        tl.fromTo(
          cover,
          2,
          { skewX: 0 },
          { xPercent: 101, transformOrigin: "0% 100%", ease: Expo.easeInOut }
        );
      }, revealNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl)
        .addTo(controller);

      revealNum++;
    });
  }

  // gsap reveal hero
  $(".gsap-reveal-hero").each(function () {
    var html = $(this).html();
    $(this).html(
      '<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">' +
        html +
        "</span></span>"
    );
  });
  var grevealhero = $(".gsap-reveal-hero");

  if (grevealhero.length) {
    var heroNum = 0;
    grevealhero.each(function () {
      var cover = $(this).find(".cover"),
        revealContent = $(this).find(".reveal-content");

      var tl2 = new TimelineMax();

      setTimeout(function () {
        tl2.to(cover, 1, {
          marginLeft: "0",
          ease: Expo.easeInOut,
          onComplete() {
            tl2.set(revealContent, { x: 0 });
            tl2.to(cover, 1, { marginLeft: "102%", ease: Expo.easeInOut });
          },
        });
      }, heroNum * 0);

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "0%",
        reverse: false,
        offset: "-300%",
      })
        .setTween(tl2)
        .addTo(controller);

      heroNum++;
    });
  }
};

animateReveal();

/* ===============================  WOW.js  =============================== */

new WOW().init();

/* ===============================  tooltip  =============================== */

$(".tooltip-target").tooltip();

//Accordion Box
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function () {
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");

    if ($(this).hasClass("active") !== true) {
      $(outerBox).find(".accordion .acc-btn").removeClass("active");
    }

    if ($(this).next(".acc-content").is(":visible")) {
      return false;
    } else {
      $(this).addClass("active");
      $(outerBox).children(".accordion").removeClass("active-block");
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
      target.addClass("active-block");
      $(this).next(".acc-content").slideDown(300);
    }
  });
}

/* =============================== Settings of content tabs =============================== */
$(".mou_tab").on("click", function (e) {
  e.preventDefault();

  console.log("click");

  $(this).addClass("active").siblings().removeClass("active");

  var id = $(this).attr("data-content");

  $('.box_content[id="' + id + '"]')
    .addClass("active")
    .siblings()
    .removeClass("active");
});

/* ===============================  show password =============================== */
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

//Odometer
$(".count-text").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll(".odometer")[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

/*======================= slide toggle =====================*/
$(".single_course_page .course_block .head").on("click", function () {
  $(this).parent().find(".content").slideToggle();
  $(this).parent().toggleClass("active");
  $(this).parent().siblings().removeClass("active");
  $(this).parent().siblings().find(".content").slideUp();
});

$(".single_course_page #course_comments .replay-btn").on("click", function () {
  $(this).parents(".comments-card").find(".replay-form").slideToggle();
});

$(".single_course_page .replay-form .main-btn.close").on("click", function () {
  $(this).parents(".replay-form").slideUp();
});

$(".filter_card .label").on("click", function () {
  $(this).parent().find(".filter_box_inner").slideToggle();
  $(this).parent().toggleClass("slideup");
});

// Number Field range slider
if ($.fn.ionRangeSlider) {
  $(".ion-rangeslider").each(function () {
    var $this = $(this);
    var rangeType = $this.data("type");
    $this.ionRangeSlider({
      type: rangeType || "double",
      drag_interval: true,
      min_interval: null,
      max_interval: null,
      onChange: function (data) {
        var $inp = data.input;
        $inp.parent().find(".min-volumn").val(data.from);
        $inp.parent().find(".max-volumn").val(data.to);
      },
    });
  });
}

// $(".nice-select").niceSelect();

/* ===============================  change style of box product  =============================== */
$(".filter_page .switch_style span").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".filter_page .switch_style .list_icon").on("click", function () {
  $(".filter_page .products_content .main_box").addClass("list_style");
});

$(".filter_page .switch_style .box_icon").on("click", function () {
  $(".filter_page .products_content .main_box").removeClass("list_style");
});

/* =============================== start Settings of content tabs (payment) ================================= */
$(".muo_tab").on("click", function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
  var id = $(this).attr("data-content");
  $('.box_content[id="' + id + '"]')
    .addClass("active")
    .siblings()
    .removeClass("active");
});
/* =============================== end Settings of content tabs (payment) =================================== */
$("#addEmail").on("click", function () {
  $("#more-email").append(
    "<div class='form-group'><label for='exampleInputEmail1'>Alternate email address</label><input type='text' class='form-control' id='' placeholder='alt.mail@example.com'/></div>"
  );
});
$("#removeEmail").on("click", function () {
  $("#more-email").children().last().remove();
});

// ==========================================

function initMap() {
  var default_view = {
    lat: 43.66106,
    lng: -79.39488,
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: default_view,
  });

  var university_of_waterloo = new google.maps.Marker({
    position: {
      lat: 43.4723,
      lng: -80.5449,
    },
    map: map,
    title: "University of Waterloo",
  });

  var university_of_toronto = new google.maps.Marker({
    position: {
      lat: 43.66106,
      lng: -79.39488,
    },
    map: map,
    title: "University of Toronto",
  });

  var laurier_university = new google.maps.Marker({
    position: {
      lat: 43.4724,
      lng: -80.5263,
    },
    map: map,
    title: "Laurier University",
  });

  var university_of_guelph = new google.maps.Marker({
    position: {
      lat: 43.5309,
      lng: -80.2285,
    },
    map: map,
    title: "University of Guelph",
  });

  var mcmaster_university = new google.maps.Marker({
    position: {
      lat: 43.2609,
      lng: -79.9192,
    },
    map: map,
    title: "McMaster University",
  });

  var carleton_university = new google.maps.Marker({
    position: {
      lat: 45.3876,
      lng: -75.696,
    },
    map: map,
    title: "Carleton University",
  });

  var university_of_ottawa = new google.maps.Marker({
    position: {
      lat: 45.4231,
      lng: -75.6831,
    },
    map: map,
    title: "University of Ottawa",
  });

  var york_university = new google.maps.Marker({
    position: {
      lat: 43.7735,
      lng: -79.5019,
    },
    map: map,
    title: "York University",
  });

  var carleton_university = new google.maps.Marker({
    position: {
      lat: 45.5048,
      lng: -73.5772,
    },
    map: map,
    title: "McGill University",
  });

  var university_of_houston = new google.maps.Marker({
    position: {
      lat: 29.7199,
      lng: -95.3422,
    },
    map: map,
    title: "University of Houston",
  });

  var university_of_western_ontario = new google.maps.Marker({
    position: {
      lat: 43.0096,
      lng: -81.2737,
    },
    map: map,
    title: "University of Western Ontario",
  });

  var ryerson_university = new google.maps.Marker({
    position: {
      lat: 43.6577,
      lng: -79.3788,
    },
    map: map,
    title: "Ryerson University",
  });

  var queens_university = new google.maps.Marker({
    position: {
      lat: 44.2253,
      lng: -76.4951,
    },
    map: map,
    title: "Queen's University",
  });

  var brock_university = new google.maps.Marker({
    position: {
      lat: 43.1176,
      lng: -79.2477,
    },
    map: map,
    title: "Brock University",
  });

  var trent_university = new google.maps.Marker({
    position: {
      lat: 44.3569,
      lng: -78.2902,
    },
    map: map,
    title: "Trent University",
  });

  var university_of_windsor = new google.maps.Marker({
    position: {
      lat: 42.3077,
      lng: -83.0685,
    },
    map: map,
    title: "University of Windsor",
  });

  var tahoe = new google.maps.Marker({
    position: {
      lat: 39.0968,
      lng: -120.0324,
    },
    map: map,
    title: "Where my boys are at",
  });
}

// course side menu

// $(".sub-btn").click(function () {
//   $(this).next(".sub-menu").slideToggle();
//   $(this).find(".dropdown").toggleClass("rotate");
// });

//jquery for expand and collapse the sidebar
$(".menu_icon_side").on("click", function () {
  $(".course_content_side_menu").toggleClass("active_show");
});

$(".menu_icon_side_close").on("click", function () {
  $(".course_content_side_menu").removeClass("active_show");
});

// venobox

// $(".venobox").venobox();

// start latest project

$(".latest_pro .owl-carousel").owlCarousel({
  // loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

jQuery(document).ready(function ($) {
  jQuery(document).on("click", ".iconInner", function (e) {
    jQuery(this).parents(".botIcon").addClass("showBotSubject");
    $("[name='msg']").focus();
  });

  jQuery(document).on("click", ".closeBtn, .chat_close_icon", function (e) {
    jQuery(this).parents(".botIcon").removeClass("showBotSubject");
    jQuery(this).parents(".botIcon").removeClass("showMessenger");
  });

  jQuery(document).on("submit", "#botSubject", function (e) {
    e.preventDefault();

    jQuery(this).parents(".botIcon").removeClass("showBotSubject");
    jQuery(this).parents(".botIcon").addClass("showMessenger");
  });

  /* Chatboat Code */
  $(document).on("submit", "#messenger", function (e) {
    e.preventDefault();

    var val = $("[name=msg]").val().toLowerCase();
    var mainval = $("[name=msg]").val();
    name = "";
    nowtime = new Date();
    nowhoue = nowtime.getHours();

    function userMsg(msg) {
      $(".Messages_list").append(
        '<div class="msg user"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' +
          mainval +
          "</span></div>"
      );
    }
    function appendMsg(msg) {
      $(".Messages_list").append(
        '<div class="msg"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' +
          msg +
          "</span></div>"
      );
      $("[name='msg']").val("");
    }

    userMsg(mainval);
    if (
      val.indexOf("hello") > -1 ||
      val.indexOf("hi") > -1 ||
      val.indexOf("good morning") > -1 ||
      val.indexOf("good afternoon") > -1 ||
      val.indexOf("good evening") > -1 ||
      val.indexOf("good night") > -1
    ) {
      if (nowhoue >= 12 && nowhoue <= 16) {
        appendMsg("good afternoon");
      } else if (nowhoue >= 10 && nowhoue <= 12) {
        appendMsg("hi");
      } else if (nowhoue >= 0 && nowhoue <= 10) {
        appendMsg("good morning");
      } else {
        appendMsg("good evening");
      }

      appendMsg("what's you name?");
    } else if (val.indexOf("i have problem with") > -1) {
      if (val.indexOf("girlfriend") > -1 || val.indexOf("gf") > -1) {
        appendMsg("take out your girlfriend, for dinner or movie.");
        appendMsg("is it helpful? (yes/no)");
      } else if (val.indexOf("boyfriend") > -1 || val.indexOf("bf") > -1) {
        appendMsg("bye something for him.");
        appendMsg("is it helpful? (yes/no)");
      } else {
        appendMsg(
          "sorry, i'm not able to get you point, please ask something else."
        );
      }
    } else if (val.indexOf("yes") > -1) {
      var nowtime = new Date();
      var nowhoue = nowtime.getHours();
      appendMsg("it's my pleaser that i can help you");

      saybye();
    } else if (val.indexOf("no") > -1) {
      var nowtime = new Date();
      var nowhoue = nowtime.getHours();
      appendMsg("it's my bad that i can't able to help you. please try letter");

      saybye();
    } else if (
      val.indexOf("my name is ") > -1 ||
      val.indexOf("i am ") > -1 ||
      val.indexOf("i'm ") > -1 ||
      val.split(" ").length < 2
    ) {
      /*|| mainval != ""*/
      // var name = "";
      if (val.indexOf("my name is") > -1) {
        name = val.replace("my name is", "");
      } else if (val.indexOf("i am") > -1) {
        name = val.replace("i am", "");
      } else if (val.indexOf("i'm") > -1) {
        name = val.replace("i'm", "");
      } else {
        name = mainval;
      }

      // appendMsg("hi " + name + ", how can i help you?");
      appendMsg("hi " + name + ", how can i help you?");
    } else {
      appendMsg("sorry i'm not able to understand what do you want to say");
    }

    function saybye() {
      if (nowhoue <= 10) {
        appendMsg(" have nice day! :)");
      } else if (nowhoue >= 11 || nowhoue <= 20) {
        appendMsg(" bye!");
      } else {
        appendMsg(" good night!");
      }
    }

    var lastMsg = $(".Messages_list").find(".msg").last().offset().top;
    $(".Messages").animate({ scrollTop: lastMsg }, "slow");
  });
  /* Chatboat Code */
});
