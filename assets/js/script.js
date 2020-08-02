$(function () {
  $(".btn_menu").click(function () {
    $(".nav").addClass("act");
  });
  $(".btn_close").click(function () {
    $(".nav").removeClass("act");
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".headerIn").addClass("headerBg");
      } else {
        $(".headerIn").removeClass("headerBg");
      }
    });
  });
});
