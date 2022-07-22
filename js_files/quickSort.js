


    async function quickSort(){
        if(selected === true){
            let ele = document.querySelectorAll('.bar1');
            let l = 0;
            let r = ele.length - 1;
            disableButtons();
            disableArraySize();
            disableSpeed();
            await quickSortMain(ele, l, r);
            enableButtons();
            enableArraySize();
            enableSpeed();
        }else{
            alert("Please Select the Array Size");
        }
    }

    async function quickSortMain(ele, l, r){
        console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
        if(l < r){
            let pivot_index = await partition(ele, l, r);
            await quickSortMain(ele, l, pivot_index - 1);
            await quickSortMain(ele, pivot_index + 1, r);
        }
        else{
            if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
                ele[r].style.background = 'green';
                ele[l].style.background = 'green';
            }
        }
    }


async function partition(ele, l, r){
    // console.log('In partition');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await wait(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
        
            await wait(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    await wait(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await wait(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}