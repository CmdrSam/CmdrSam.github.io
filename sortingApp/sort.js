var rNums = [];
disp = ()=>{
    var n = document.getElementById("numberOfElements").value;
    document.getElementById("show").innerHTML = "Generating array of "+n+" random numbers";
    genRandom(n);
    document.getElementById("sortBtn").disabled = true;
}

genRandom = (num)=>{
    for(let i=0;i<num;i++){
        rNums[i] = Math.floor(Math.random()*10)
    }
    document.getElementById("randNums").innerHTML = "[" + rNums + "]";
    
    bubbleSort();
}

let displayCanv = (arr)=>{
    let canv = document.getElementById("test");
            var context = canv.getContext("2d");
            context.clearRect(0, 0, canv.width, canv.height);

            for(let k=0;k<arr.length;k++){
                
                context.fillStyle = "#86e03d";
                context.fillRect(5+5*k,5,3,arr[k]*10);
            }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

///////////////////////////////////////////////////////////////////////////////////
////////////////////////// Sorting algorithms ////////////////////////////////////

// default
async function bubbleSort(){
    var startTime = performance.now();
    let arr = rNums;
    let n = arr.length;
    
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-i-1; j++){ 
            if (arr[j] > arr[j+1]) 
            { 
                
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            }
            
            displayCanv(arr);
            
        }
        
        // Waiting for 5000/array length
        await sleep(300);
    }

    // Finding time elapsed
    var endTime = performance.now();

    // Displaying final output and other sorts
    document.getElementById("sortedNums").innerHTML = "Final sorted array = [" + arr + "] <br> This took " +((endTime-startTime)/1000).toFixed(2)+ " seconds";
    document.getElementById("sortBtn").disabled = false;
    var div = document.getElementById("sortBtns");
    if(div.style.display==="none"){ div.style.display = "block"}
}


// Merge sort


// Heap sort



//Quick sort






