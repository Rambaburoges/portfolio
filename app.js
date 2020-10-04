$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      console.log("if");
      $("nav").addClass("obrn-nav");
    } else {
      $("nav").removeClass("obrn-nav");
    }
  });
});
