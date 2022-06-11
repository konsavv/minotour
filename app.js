$(document).ready(function () {
  $(".text-box").fadeTo(1000, 0.3, function () {
    $(".text-box").fadeTo(1000, 1);
  });
});

$(".menu-toggle-btn").click(function () {
  $(this).toggleClass("fa-times");
  $(".nav-links").toggleClass("active");
});
