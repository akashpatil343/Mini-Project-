const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);
const quotionEl =document.getElementById("quotion");
const formEl =document.getElementById("form");
const inputEl =document.getElementById("input");
const attemptEl = document.getElementById("atm");
const scorenEl = document.getElementById("scoren");
const acuEl = document.getElementById("acu");
const cansEl = document.getElementById("cans")
const wansEl = document.getElementById("wans")
let atm = JSON.parse( sessionStorage.getItem("atm"));
if(!atm){
    atm=0
}

// let scoreEl = document.getElementById("score");
let score = JSON.parse( sessionStorage.getItem("score"))

if(!score){
    score=0
}
let scoren = score;
scorenEl.innerText=`${scoren}`
let marks=(scoren/atm)*100;
if (scoren<=0){
    marks=0
}

let cans = JSON.parse(sessionStorage.getItem("cans"))
if(!cans){
    cans=0
}

let wans = JSON.parse(sessionStorage.getItem("wans"))
if(!wans){
    wans=0
}

attemptEl.innerText=` ${atm}`
cansEl.innerText=`${cans}`
wansEl.innerText=`${wans}`
acuEl.innerText=`${ Math.round(marks)}%`


quotionEl.innerText=`What is ${n1} Minus ${n2}?`

const correctAns =n1-n2;

formEl.addEventListener("submit",()=>{
    atm++
    const userAns = +inputEl.value
    
    if(userAns==correctAns){
        score++;
        cans++;
        updatesessionStorage();
    }else{
        score--
        wans++
        updatesessionStorage();
    }
})

function updatesessionStorage(){
    sessionStorage.setItem("score",JSON.stringify(score))
    sessionStorage.setItem("atm",JSON.stringify(atm))
    sessionStorage.setItem("cans",JSON.stringify(cans))
    sessionStorage.setItem("wans",JSON.stringify(wans))  
}

