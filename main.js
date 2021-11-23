
const container = document.getElementById("boxx");


function target(x){
    // console.log(x.value);
    container.innerHTML="";
    const value = x.value;

    for(let i=0;i<value;i++){

        let num = Math.floor((Math.random()*100))+1;
         let bar = document.createElement("div");
         bar.value = num;
    
         bar.classList.add("bar1");
        //  bar.style.height = (num*3.5) + "px";
        bar.style.height = `${num*3.5}px`;

        container.appendChild(bar);

    }
}

function bubbleSort(){
    const arr = [];
    const b = document.querySelectorAll(".bar1");
    // console.log(b);

        for(let i=0;i<b.length;i++){
           arr.push(b[i].value);
        }
        console.log("before swap", arr);
        // let isSwapped = false;

        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-1;j++){
                b[j].style.backgroundColor="green";
                b[j+1].style.backgroundColor="green";
                if(arr[j]> arr[j+1]){
                    var temp = arr[j];
                    arr[j]= arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        console.log(arr);
}


  