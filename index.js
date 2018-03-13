var lampL= document.getElementById("light");
var backLight= document.getElementById("light2");
var deBoat= document.getElementById("boat");
var deCity= document.getElementById("city");
var lightToggle= document.getElementById("onoff");
var num= 0;


function moveBoat(){
  deBoat.style.left= "1000px";
}


window.onload = function(){
  moveBoat();
};

deBoat.addEventListener("click", function(){
  deBoat.src="SVG/boatDes.svg";
  deBoat.style.top= "950px";
  deBoat.style.opacity= "0";
});

//Buildings interaction
document.getElementById("cityTouch").addEventListener("mouseenter", function(){
  deCity.style.width="1040px";
  deCity.style.height="320px";
});
document.getElementById("cityTouch").addEventListener("mouseout", function(){
  deCity.style.width="1000px";
  deCity.style.height="300px";
});

// Light string pull
lightToggle.addEventListener("mouseenter", function(){
  lightToggle.style.height= "410px";
});
lightToggle.addEventListener("mouseout", function(){
  lightToggle.style.height= "400px";
});

function retract(){
  lightToggle.style.top= "";
  lightToggle.style.top= "-40";
}

lightToggle.addEventListener("click", function(){
  lampL.style.opacity= "0";
  backLight.style.opacity= "1";
  document.getElementById("title").style.top= "800px";
  document.getElementById("title").style.zIndex= "-50";
  document.getElementById("subTitle").style.opacity= "0";
  lightToggle.style.top= "0";
  setTimeout(retract, 250);
  if(num == 1){
    var newDiv= document.createElement("div")
    newDiv.id= "newWord";
    var tnode= document.createTextNode("Click the buildings to turn off more lights!");
    newDiv.appendChild(tnode);
    display.appendChild(newDiv);
  }
  num = 1;
});

document.getElementById("cityTouch").addEventListener("click", function(){
  console.log("yeet");
  if(num == 1){
    window.location.href = "page2/index.html";
  }
});
