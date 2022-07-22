
const container = document.getElementById("boxx");
let selected=false;
let glob="";


function target(x){
    // console.log(x.value);
    glob=x;
    newArray();
}

function createNewArray(n){
    for(let i=0;i<n;i++){

        let num = Math.floor((Math.random()*100))+1;
         let bar = document.createElement("div");
         bar.value = num;
         bar.classList.add("bar1");
        //  bar.style.height = (num*3.5) + "px";
        bar.style.height = `${num*3.5}px`;

        container.appendChild(bar);

    }
}

function newArray(){
    // console.log("Inside newArray");
    selected=true;
    container.innerHTML="";
    let num=5;
    if(glob!==""){
        num=glob.value;
    }
    createNewArray(num);
}



function swap(b1,b2){

    let temp = b1.style.height;
    b1.style.height=b2.style.height;
    b2.style.height=temp;
}

function disableButtons(){
    document.querySelector(".newarray").disabled=true;
    document.querySelector(".Bubble").disabled=true;
    document.querySelector(".Selection").disabled=true;
    document.querySelector(".Insertion").disabled=true;
    document.querySelector(".Merge").disabled=true;
    document.querySelector(".Quick").disabled=true;
}

function enableButtons(){
    document.querySelector(".newarray").disabled=false;
    document.querySelector(".Bubble").disabled=false;
    document.querySelector(".Selection").disabled=false;
    document.querySelector(".Insertion").disabled=false;
    document.querySelector(".Merge").disabled=false;
    document.querySelector(".Quick").disabled=false;
}

function disableArraySize(){
    document.querySelector("#Select_Array_Size").disabled=true;
}

function enableArraySize(){
    document.querySelector("#Select_Array_Size").disabled=false;
}

function disableSpeed(){
    document.querySelector("#Select_Speed").disabled=true;
}

function enableSpeed(){
    document.querySelector("#Select_Speed").disabled=false;
}


function wait(milisec){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('')
        },milisec);
    })
}

let delay = 200;
function speed(timespeed){
    // console.log(timespeed.value);
   delay= 390 - Number(timespeed.value);
}



  