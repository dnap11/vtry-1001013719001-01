$(document).ready(function () {
  "use strict";
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".backtoTop").fadeIn(300);
      $(".fct_aside , header").addClass("active");
      $(".box_plugin_bottom").addClass("active");
    } else {
      $(".backtoTop").fadeOut(300);
      $(".box_plugin_bottom").removeClass("active");
      $(".fct_aside , header").removeClass("active");
    }
  });

  $(".backtoTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });

  $(".banner_list dl , .news_list_ct1 dl").on("click", function () {
    var href = $(this).find("a").attr("href");
    location.href = href;
  });

  $(".btn_side").click(function () {
    $(this).toggleClass("open");
    $("nav").toggleClass("active");
    $(".sub_btn").removeClass("disable");
    $("li.sub ul").stop().slideUp();
    return false;
  });

  $(".menu_bar").click(function () {
    $(".menu_bar p").toggleClass("active");
    $(".menu_header").toggleClass("active");
  });
  $(".has_dropdown").click(function () {
    $(this).find(".menu_dropdown").slideToggle("fast");
    $(this).toggleClass("active");
  });
});
