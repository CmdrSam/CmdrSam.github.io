var rNums = [];
disp = ()=>{
    var n = document.getElementById("numberOfElements").value;
    document.getElementById("show").innerHTML = "Generating array of "+n+" random numbers";
    genRandom(n);
}

genRandom = (num)=>{
    for(let i=0;i<num;i++){
        rNums[i] = Math.floor(Math.random()*9)
    }
    document.getElementById("randNums").innerHTML = "[" + rNums + "]";
    //makeLines();
    bubbleSort();
}

makeLines = ()=>{

    let canv = document.getElementById("test");
    var context = canv.getContext("2d");
    for(let i=0;i<rNums.length;i++){
        context.fillRect(10,10+20*i,rNums[i]*30,15);
    }
    bubbleSort();
}

async function bubbleSort(){
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
            
            
            // Displaying array in canvas
            let canv = document.getElementById("test");
            var context = canv.getContext("2d");
            context.clearRect(0, 0, canv.width, canv.height);

            for(let k=0;k<arr.length;k++){
                
                context.fillStyle = "#86e03d";
                //context.fillRect(5,5+5*k,arr[k]*20,3);
                context.fillRect(5+5*k,5,3,arr[k]*10);
            }
            
        }
        
        // Waiting for 5000/array length
        await sleep(300);
    }
    document.getElementById("sortedNums").innerHTML = "[" + arr + "]"; 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }