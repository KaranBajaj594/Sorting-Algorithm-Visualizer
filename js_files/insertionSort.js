
async function insertionSort(){
    if(selected === true){
        console.log("Hello")
        disableButtons();
        disableArraySize();
        disableSpeed();
        await sortUsingInsertionSort();
        enableButtons();
        enableArraySize();
        enableSpeed();
    }else{
        alert("Please Select the Array Size");
    }
}



async function sortUsingInsertionSort(){
    console.log("entered")
    const ele=document.querySelectorAll(".bar1");
    console.log(ele);
    ele[0].style.backgroundColor='green';
    for(let i=1;i<ele.length;i++){
        let j=i-1;
        let key=ele[i].style.height;
        ele[i].style.backgroundColor='hsl(209, 28%, 39%)';

        await wait(delay);

        while(j>=0 && parseInt(ele[j].style.height)>parseInt(key)){
            ele[j].style.backgroundColor="hsl(209, 28%, 39%)";
            ele[j+1].style.height=ele[j].style.height;
            j=j-1;

            await wait(delay);

            for(let k=i;k>=0;k--){
                ele[k].style.backgroundColor='green';
            }
        }
        ele[j+1].style.height=key;
        ele[i].style.backgroundColor='green';
    }
}