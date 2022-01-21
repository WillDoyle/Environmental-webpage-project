var defaultImg = document.getElementById("default-image").innerHTML;
var communitiesImg = document.getElementById("communities-image").innerHTML;
var rainforestImg = document.getElementById("rainforest-image").innerHTML;
var climateImg = document.getElementById("climate-image").innerHTML;

//defaultImg.style.opacity = "0.5";
//rainforestImg.style.opacity = "0.5";
//communitiesImg.style.opacity = "0.5";
//climateImg.style.opacity = "0.5";


function toggleVisibility(id) {
        $("figure#communities-image").css("opacity", id === "communities-image" ? 1 : 0)
        
        $("figure#rainforest-image").css("opacity", id === "rainforest-image" ? 1 : 0);

        $("figure#climate-image").css("opacity", id === "climate-image" ? 1 : 0);
    
        $("figure#default-image").css("opacity", id === "default-image" ? 1 : 0);
    
}