//side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };

  (function () {
    var title = [
      "250+",
      "3500+",
      "250+"
    ],
    i = 0;
    setInterval(function(){
      $('#h3').fadeOut(function(){
        $(this).html(words[(i = (i = 1) % title.length)]).fadeIn();
      });
    }, 1000)
  })();