function genTicket(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}


function sum(arr){
    // arr.reduce returns a sum of all the elements of the array
    return arr.reduce((sum,curr)=>sum+curr,0); // 0 is the initial value of sum, curr is the current element of the array
}

export {genTicket,sum};