var elements = document.getElementsByClassName('rainforest__3--slide');


function mouseEnter() {
    $(document).ready(function(){
           var opacity = $(".rainforest__3--slide").css("opacity");
           console.log("opacity", opacity);
           if (opacity > 0) {
             $(".rainforest__3--slide").css("opacity", 0);
           }
           else if (opacity == 0) {
             $(".rainforest__3--slide").css("opacity", 1);
           }
       });
    }
            for (i = 0; i < elements.length; i++) {
                elements[i].addEventListener("mouseenter", mouseEnter);
            }

            //hover over slide element
            //change slide background