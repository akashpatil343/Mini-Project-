const n1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const formEl =document.getElementById("form");
const inputEl =document.getElementById("input");
const scorenEl = document.getElementById("scoren");
const qEl=document.getElementById("quotion");
const attemptEl = document.getElementById("atm");
const acuEl = document.getElementById("acu")
const cansEl = document.getElementById("cans")
const wansEl = document.getElementById("wans")
let atm = JSON.parse( sessionStorage.getItem("atm"));
if(!atm){
    atm=0
}

let scoren = JSON.parse(sessionStorage.getItem("scoren")) 
 if(!scoren){
    scoren = 0;
 }
 let cans = JSON.parse(sessionStorage.getItem("cans"))
if(!cans){
    cans=0
}
let wans = JSON.parse(sessionStorage.getItem("wans"))
if(!wans){
    wans=0
}
 let marks=(scoren/atm)*100;
 if(scoren<=0){
    marks=0;
 }
 scorenEl.innerText=`${scoren}`
 attemptEl.innerText=`${atm}`
 cansEl.innerText=`${cans}`
 wansEl.innerText=`${wans}`
 acuEl.innerText=`${ Math.round(marks)}%`
qEl.innerText=`What is ${n1} multiply by ${num2} ?`
const correctAns = n1*num2 ;
formEl.addEventListener("submit",()=>{
    atm=atm+1;
    const userAns= +inputEl.value
    if(userAns==correctAns){
        scoren++
        cans++
        updatesessionStorage();
        
    }else{
        scoren--
        wans++
        updatesessionStorage();
    }

})

function updatesessionStorage(){
    sessionStorage.setItem("scoren",JSON.stringify(scoren))
    sessionStorage.setItem("atm",JSON.stringify(atm))
    sessionStorage.setItem("cans",JSON.stringify(cans))
    sessionStorage.setItem("wans",JSON.stringify(wans))
}

