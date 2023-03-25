var div=document.createElement("div");
div.style.textAlign="center"
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");


var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

var active=document.createElement("div");
active.setAttribute("id","active");

var Recovered=document.createElement("div");
Recovered.setAttribute("id","recovered");

var death=document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,Recovered,death);
document.body.append(div);

async function foo(){
  let res=document.getElementById("country").value;
  console.log(res);
  let url=`https://api.covid19api.com/dayone/country/${res}`;
  var res1=await fetch(url);
  var res2=await res1.json();
  var index=res2.length-1;
  console.log(res2[index]);
  console.log(res2[index].Active);
  active.innerHTML=`Total active cases:${ (res2[index].Active)}`
  Recovered.innerHTML=`Total Recovered cases:${ (res2[index].Recovered)}`
  death.innerHTML=`Total death cases:${ (res2[index].Deaths)}`
}

