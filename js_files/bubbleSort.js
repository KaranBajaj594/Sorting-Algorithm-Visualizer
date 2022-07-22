
async function bubbleSort(){
    if(selected === true){
        disableButtons();
        disableArraySize();
        disableSpeed();
        await sortUsingBubbleSort();
        enableButtons();
        enableArraySize();
        enableSpeed();
    }else{
        alert("Please Select the Array Size");
    }
}


async function sortUsingBubbleSort(){
    // console.log("Inside Bubble");
    const b = document.querySelectorAll(".bar1");

        for(let i=0;i<b.length-1;i++){
            for(let j=0;j<b.length-i-1;j++){
                b[j].style.backgroundColor="hsl(209, 28%, 39%)";
                b[j+1].style.backgroundColor="hsl(209, 28%, 39%)";
                // console.log(parseInt(b[j].style.height));
                if(parseInt(b[j].style.height)> parseInt(b[j+1].style.height)){
                    await wait(delay);
                    swap(b[j],b[j+1]);
                }
                b[j].style.backgroundColor="cyan";
                b[j+1].style.backgroundColor="cyan";
            }
            b[b.length-i-1].style.backgroundColor="#ADFF2F";
        }
        b[0].style.backgroundColor="#ADFF2F";
}