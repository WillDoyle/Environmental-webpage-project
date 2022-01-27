var defaultImg = document.getElementById("default-image").innerHTML;
var communitiesImg = document.getElementById("communities-image").innerHTML;
var rainforestImg = document.getElementById("rainforest-image").innerHTML;
var climateImg = document.getElementById("climate-image").innerHTML;

//defaultImg.style.opacity = "0.5";
//rainforestImg.style.opacity = "0.5";
//communitiesImg.style.opacity = "0.5";
//climateImg.style.opacity = "0.5";

AOS.init();


function toggleVisibility(id) {
        $("figure#communities-image").css("opacity", id === "communities-image" ? 1 : 0)

        $("figure#rainforest-image").css("opacity", id === "rainforest-image" ? 1 : 0);

        $("figure#climate-image").css("opacity", id === "climate-image" ? 1 : 0);

        $("figure#default-image").css("opacity", id === "default-image" ? 1 : 0);

}

function changeColor(id, hover) {

        if (id == "communities-image") {
                var targetDiv = document.getElementById("rainforest__3--sections").getElementsByClassName("communities-text")[0];
                console.log(targetDiv.className);
                var targetText = document.getElementById("rainforest__3--sections").getElementsByClassName("communities-para")[0];
                var targetIcon = document.getElementById("rainforest__3--sections").getElementsByClassName("communities-icon")[0];
        }

        if (id == "rainforest-image") {
                var targetDiv = document.getElementById("rainforest__3--sections").getElementsByClassName("rainforest-text")[0];
                console.log(targetDiv.className);
                var targetText = document.getElementById("rainforest__3--sections").getElementsByClassName("rainforest-para")[0];
                var targetIcon = document.getElementById("rainforest__3--sections").getElementsByClassName("rainforest-icon")[0];

        }

        if (id == "climate-image") {
                var targetDiv = document.getElementById("rainforest__3--sections").getElementsByClassName("climate-action-text")[0];
                console.log(targetDiv.className);
                var targetText = document.getElementById("rainforest__3--sections").getElementsByClassName("climate-action-para")[0];
                var targetIcon = document.getElementById("rainforest__3--sections").getElementsByClassName("climate-icon")[0];

        }

        if (hover == 'leave') {
                targetText.style.opacity = "0";
                targetText.style.display = "none";
                targetIcon.style.backgroundColor = "aliceblue";
                if (targetDiv.className !== "communities-text") {
                        targetDiv.style.color = "aliceblue";
                        targetIcon.style.backgroundcolor = "aliceblue";
                }
        }
        if (hover == 'enter') {
                targetText.style.opacity = "1";
                targetText.style.display = "block";
                if (targetDiv.className !== "communities-text") {
                        targetDiv.style.color = "#2B443C";
                        targetText.style.color = "#2B443C";
                        
                }
                
                
                if(targetDiv.className !== "climate-action-text"){
                        targetIcon.style.backgroundColor = "#CFFF4F";
                }
                
        }



}