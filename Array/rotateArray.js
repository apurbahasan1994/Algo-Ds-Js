function rotateArray(arr,k){

    for(let i=1;i<=k%arr.length;i++){
        const lastItem=arr.pop();
        arr.unshift(lastItem);
    }
    return arr;
}
function rev(arr,start,end){
    while(start<end){
        [arr[start], arr[end]] =[arr[end],arr[start]];
        end--;
        start++;
    }
}
function rotateArrayOn(arr,k)
{
    const length=k%arr.length;
    arr.reverse();
    rev(arr,0,k-1);
    rev(arr,k,arr.length-1);
    return arr;
}

console.log(rotateArray([1,2,3,4,5,6],2));
console.log(rotateArrayOn([1,2,3,4,5,6],2));