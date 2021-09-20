function array_chunk(arr,length)
{
    arr2=[]
    let i=0
    for(;i<=arr.length;i=i+length){
       arr2.push(arr.slice(i,i+length))
    }
  
    return arr2
}

console.log(array_chunk([1,2,3,4,6,7,8],3))