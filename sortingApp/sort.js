var rNums = [];
disp = ()=>{
    var n = document.getElementById("numberOfElements").value;
    //document.getElementById("show").innerHTML = ;
    if(n<50){
        genRandom(n);
        document.getElementById("sortBtn").disabled = true;
    }
    else{
        alert("It will take a lot of time! Please enter something below 50");
        document.getElementById("sortBtn").disabled = false;
    }
    
}

genRandom = (num)=>{
    for(let i=0;i<num;i++){
        rNums[i] = Math.floor(Math.random()*10)
    }
    document.getElementById("randNums").innerHTML = "<a class='lead'>Generating array of "+num+" random numbers = </a>"+ "[" + rNums + "]";
    
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
    document.getElementById("sortedNums").innerHTML = "<a class='lead'>Final sorted array = </a>[" + arr + "] <br><a class='lead'> This took </a>" +((endTime-startTime)/1000).toFixed(2)+ " seconds";
    document.getElementById("sortBtn").disabled = false;
    var div = document.getElementById("sortBtns");
    if(div.style.display==="none"){ div.style.display = "block"}
}


// Merge sort
async function mergeSort(){
    alert("I am working on that :P");
}

// Heap sort
async function heapSort(){
    alert("I am working on that :P");
}



//Quick sort
async function quickSort(){
    alert("I am working on that :P");
}

//Selection sort
async function selectionSort(){
    alert("I am working on that :P");
}







