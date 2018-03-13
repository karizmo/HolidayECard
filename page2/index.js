var winL1=document.getElementById("wl1"),
    winL2=document.getElementById("wl2"),
    winL3=document.getElementById("wl3"),
    winL4=document.getElementById("wl4"),
    winL5=document.getElementById("wl5"),
    winL6=document.getElementById("wl6"),
    deTrans=document.getElementById("transB"),
    deN=document.getElementById("deNumber");
countNum= 10;
//facts
var diNum= 1;
var deInfo1= "1. The First Earth Hour event started in 2007 in Sydney. The event is organized every year by the World Wide Fund (WWF).";
var deInfo2="2. This day is celebrated to bring awareness to global warming and show ways to conserve energy";
var deInfo3="3. in 2017, 187 countries had participated in this global initiative."
var deInfo4="4. Important landmarks like the Eiffel tower, Empire state Building, Golden Gate bridge and other recognized buildings switch off their lights for this event."
var deInfo5="5. Earth hour is also celebrated on the International Space Statiton."
var deInfo6="6. Government Institutions also trun off their lights."

deN.innerHTML= countNum;

function removeDiv(dtn){
  //((dtn.parentNode).parentNode).removeChild(dtn.parentNode);
  dtn.parentNode.removeChild(dtn);
}

function makeInfoBox(){
  var newInfoDiv= document.createElement("div");
  newInfoDiv.id="nId"+diNum;
  if(diNum == 1){
    var deNode= document.createTextNode(deInfo1);
  }
  else if(diNum == 2){
    var deNode= document.createTextNode(deInfo2);
  }
  else if(diNum == 3){
    var deNode= document.createTextNode(deInfo3);
  }
  else if(diNum == 4){
    var deNode= document.createTextNode(deInfo4);
  }
  else if(diNum == 5){
    var deNode= document.createTextNode(deInfo5);
  }
  else if(diNum == 6){
    var deNode= document.createTextNode(deInfo6);
    document.getElementById("nextPage").style.display= "block";
  }
  newInfoDiv.appendChild(deNode);
  //document.getElementById("nId"+diNum).style.marginBottom= "10px";
  document.getElementById("infoBox").appendChild(newInfoDiv);
  diNum++;
}

document.getElementById("previousPage").addEventListener("click", function(){
  window.location.href = "../index.html";
});
document.getElementById("nextPage").addEventListener("click", function(){
  window.location.href = "../page3/index.html";
});

winL1.addEventListener("click", function(){
  document.getElementById("l1").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

winL2.addEventListener("click", function(){
  document.getElementById("l2").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

winL3.addEventListener("click", function(){
  document.getElementById("l3").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

winL4.addEventListener("click", function(){
  document.getElementById("l4").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
  removeDiv(document.getElementById("l4"));
});

winL5.addEventListener("click", function(){
  document.getElementById("l5").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

winL6.addEventListener("click", function(){
  document.getElementById("l6").style.opacity="0";
  countNum -= 1;
  deN.innerHTML= countNum;
  makeInfoBox();
  removeDiv(this);
});

//animations
deTrans.addEventListener("mouseenter", function(){
  deTrans.style.height= "85px";
});
deTrans.addEventListener("mouseout", function(){
  deTrans.style.height= "75px";
});

deTrans.addEventListener("click", function(){
  document.getElementById("spark").style.zIndex= "61";
  document.getElementById("spark").style.opacity= "1";
  setTimeout(function(){
    document.getElementById("spark").style.opacity= "0";
  }, 150);
  deTrans.style.top="710px";
  deTrans.style.left="860px";
  deTrans.style.transform= "rotate(90deg)"
});
