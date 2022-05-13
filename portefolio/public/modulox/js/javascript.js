
window.onscroll = function () {
if(window.innerWidth >=1024){
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "white"; 
        document.getElementById("navbar").style.position = "fixed"; 
        document.getElementById("link1").style.color="grey";
        document.getElementById("link2").style.color="grey";
        document.getElementById("link3").style.color="grey";
        document.getElementById("link4").style.color="grey";
        document.getElementById("link5").style.color="grey";
        document.getElementById("link6").style.color="grey";
        document.getElementById("link7").style.color="grey";
        }

    else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("logo").style.color = "black";
        document.getElementById("link1").style.color="white";
        document.getElementById("link2").style.color="white";
        document.getElementById("link3").style.color="white";
        document.getElementById("link4").style.color="white";
        document.getElementById("link5").style.color="white";
        document.getElementById("link6").style.color="white";
        document.getElementById("link7").style.color="white";
    }
    }

else {document.getElementById("navbar").style.background = "white"}}