//side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };

// auto text change
// banner h3 (heading)
  (function () {
    var title = ["23", "250+","3500+", ],
    i = 0;
    setInterval(function(){ $('#h3').fadeOut(function(){
        $(this).html(title[(i = (i + 1) % title.length)]).fadeIn();
      }); }, 3000)
  })();
// text
  (function () {
    var words = ["years of experience", "full-time professionals on staff","Implemented projects in IT", ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();
// arrows
  (function () {
    setInterval(function() {
        $('#arrow').fadeOut().delay(50).fadeIn();
    }, 3000);
})();
