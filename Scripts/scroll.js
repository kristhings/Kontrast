window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.height = "80px";
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.90)";
        document.getElementById("navbar-left").style.height = "30px";
        document.getElementById("navbar-left").style.width = "30px";
        document.getElementById("navbar-right").style.marginTop = "-10px";
      } else {
        document.getElementById("nav").style.height = "100px";
        document.getElementById("nav").style.backgroundColor = "white";
        document.getElementById("navbar-left").style.height = "50px";
        document.getElementById("navbar-left").style.width = "50px";
        document.getElementById("navbar-right").style.marginTop = "0";
      }
    }