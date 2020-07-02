$("div.header-right > a").click(function () {
  $("div.hamburger-menu").fadeIn();
});

$("div.hamburger-menu > a.close").click(function () {
  $("div.hamburger-menu").fadeOut();
});
