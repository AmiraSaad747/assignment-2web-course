//stored function 
function stored(arr){
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        return false;
    }
  }
  return true;
}
console.log(stored([1,2,3,4,5,6,]));
console.log(stored([1,2,3,7,5,6,]));

//Return Numbers Greater Than a Value
function Greaternum(arr,value){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>value){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(Greaternum([5,10,15,30],10));