
async function selectionSort(){
    if(selected === true){
        disableButtons();
        disableArraySize();
        disableSpeed();
        await sortUsingSelectionSort();
        enableButtons();
        enableArraySize();
        enableSpeed();
    }else{
        alert("Please Select the Array Size");
    }
}

async function sortUsingSelectionSort(){
    const ele = document.querySelectorAll(".bar1");
    for(let i=0;i<ele.length;i++){
        let min_index=i;
        ele[i].style.backgroundColor="red";
        for(let j=i+1;j<ele.length;j++){
            ele[j].style.backgroundColor="hsl(209, 28%, 39%)";
             await wait(delay);
             if(parseInt(ele[j].style.height)< parseInt(ele[min_index].style.height)){
                 if(min_index !==i){
                     ele[min_index].style.backgroundColor="cyan";
                 }
                 min_index=j;
             }
             else{
                 ele[j].style.backgroundColor="cyan"
             }
        }
        await wait(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.backgroundColor="cyan";
        ele[i].style.backgroundColor="green";
    }
}

