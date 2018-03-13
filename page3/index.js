var deN=document.getElementById("deNumber"),
    dl1=document.getElementById("l1d"),
    dl2=document.getElementById("l2d"),
    dl3=document.getElementById("l3d"),
    dl4=document.getElementById("l4d"),
    deCd=document.getElementById("closedD"),
    deCat=document.getElementById("animal");
countNum=4;
deN.innerHTML= countNum;

var diNum= 1;
var dInfo1="7. Earth Hour is celebrated at 8:30pm to 9:30pm on the last Saturday of March every year.";
var dInfo2="8. In 2013 there was 136 megawatt hours saved in British Columbia."
var dInfo3="9. For one hour people and companies switch off non-essential lights, not any lights that affect public safety."
var dInfo4="10. Since its inception, Earth hour is the largest grassroots movement for the environment in the world."



function makeInfoBox(){
  var newInfoDiv= document.createElement("div");
  newInfoDiv.id="nId"+diNum;
  if(diNum == 1){
    var deNode= document.createTextNode(dInfo1);
  }
  else if(diNum == 2){
    var deNode= document.createTextNode(dInfo2);
  }
  else if(diNum == 3){
    var deNode= document.createTextNode(dInfo3);
    document.getElementById("slLight").style.opacity= "1";
  }
  else if(diNum == 4){
    var deNode= document.createTextNode(dInfo4);
  }
  newInfoDiv.appendChild(deNode);
  //document.getElementById("nId"+diNum).style.marginBottom= "10px";
  document.getElementById("infoBox").appendChild(newInfoDiv);
  diNum++;
}

function removeDiv(dtn){
  dtn.parentNode.removeChild(dtn);
}

document.getElementById("previousPage").addEventListener("click", function(){
  window.location.href = "../page2/index.html";
});

dl1.addEventListener("click", function(){
  document.getElementById("p3L1").style.opacity= "0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

dl2.addEventListener("click", function(){
  document.getElementById("p3L2").style.opacity= "0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

dl3.addEventListener("click", function(){
  document.getElementById("p3L3").style.opacity= "0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

dl4.addEventListener("click", function(){
  document.getElementById("p3L4").style.opacity= "0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

document.getElementById("dcd").addEventListener("mouseenter", function(){
  deCd.style.height= "150px";
});
document.getElementById("dcd").addEventListener("mouseout", function(){
  deCd.style.height= "140px";
});
document.getElementById("dcd").addEventListener("click", function(){
  deCd.style.opacity= "0";
  document.getElementById("openD").style.opacity= "1";
  document.getElementById("animal").style.opacity="1";
  document.getElementById("animal").style.left="340px";
  document.getElementById("animal").style.zIndex= "201";
  setTimeout(function(){deCat.style.transform="rotate(-100deg)";},1000);
  setTimeout(function(){deCat.style.transform="rotate(-60deg)";
  deCat.style.zIndex="50";
  deCat.style.left="380px";},3000);
  setTimeout(function(){
    deCat.style.opacity="0"
    document.getElementById("openD").style.opacity="0";
    deCd.style.opacity="1";
    deCat.style.transform="rotate(-60deg)";
  },5000);

});
