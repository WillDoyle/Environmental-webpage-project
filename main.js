var defaultImg = document.getElementById("default-image").innerHTML;
var communitiesImg = document.getElementById("communities-image").innerHTML;
var rainforestImg = document.getElementById("rainforest-image").innerHTML;
var climateImg = document.getElementById("climate-image").innerHTML;

//defaultImg.style.opacity = "0.5";
//rainforestImg.style.opacity = "0.5";
//communitiesImg.style.opacity = "0.5";
//climateImg.style.opacity = "0.5";


   function mouseEnter(caller){
       console.log(caller);

       if(caller == "communities"){
           $("figure#communities-image").css("opacity",1);
           $("figure#default-image").css("opacity",0);
           $("figure#climate-image").css("opacity",0);
           $("figure#rainforest-image").css("opacity",0);
       }
       if(caller == "rainforests"){
        $("figure#rainforest-image").css("opacity",1);
        $("figure#communities-image").css("opacity",0);
        $("figure#default-image").css("opacity",0);
        $("figure#climate-image").css("opacity",0);
       }
        if(caller == "climate"){
            $("figure#climate-image").css("opacity",1);
            $("figure#communities-image").css("opacity",0);
            $("figure#default-image").css("opacity",0);
            $("figure#rainforest-image").css("opacity",0);
        }

        if(caller == "default-image"){
            $("figure#default-image").css("opacity",1);
            $("figure#communities-image").css("opacity",0);
            $("figure#climate-image").css("opacity",0);
            $("figure#rainforest-image").css("opacity",0);
        }

    
   }

   function mouseLeave(caller){
       if(caller == "default-image"){
       $("figure#default-image").css("opacity",1);
       $("figure#communities-image").css("opacity",0);
       $("figure#rainforests-image").css("opacity",0);
       $("figure#climate-image").css("opacity",0);
       console.log(caller);
       }
       else{
           console.log(caller);
       }
   }