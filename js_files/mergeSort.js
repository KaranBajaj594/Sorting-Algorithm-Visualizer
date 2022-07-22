async function mergeSort(){
    if(selected === true){
        let ele = document.querySelectorAll('.bar1');
        console.log(ele);
        let l = 0;
        let r = parseInt(ele.length) - 1;
        disableButtons();
        disableArraySize();
        disableSpeed();
        await mergeSortMain(ele, l, r);
        enableButtons();
        enableArraySize();
        enableSpeed();
    }else{
        alert("Please Select the Array Size");
    }
}

async function merge(ele,low,mid,high){
    const n1=mid-low+1;
    const n2=high-mid;

    let left= new Array(n1);
    let right= new Array(n2);

    for(let i=0;i<n1;i++){
        await wait(delay);
        console.log("inside loop");
        ele[low+i].style.background='orange';
        left[i]=ele[low+i].style.height; 
    }

    for(let i=0;i<n2;i++){
        await wait(delay);
        ele[mid+1+i].style.background='yellow';
        right[i]=ele[mid+1+i].style.height;
    }
    await wait(delay);
    let i=0,j=0,k=low;
    while(i<n1 && j<n2){
        await wait(delay);
        console.log(left[i],right[j]);
        console.log(parseInt(left[i]),parseInt(right[j]));

        //To add color for which two are being compared for merging

        if(parseInt(left[i]) <= parseInt(right[j])){
             // color
              if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
              }
              else{
                    ele[k].style.background = 'lightgreen';
              }   
              ele[k].style.height = left[i];
              i++;  
              k++;
        }else{
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSortMain(ele, left, right){
    // console.log('In mergeSort');
    if(left >= right){
        // console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    await mergeSortMain(ele, left, mid);
    await mergeSortMain(ele, mid + 1, right);
    await merge(ele, left, mid, right);
}