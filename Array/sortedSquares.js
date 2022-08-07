//brute force
// time=O(n)+O(nlogn)=O(nlogn)
//space O(n)
const arr =[-4,-2,0,1,3];
function makeSortedArray(arr)
{
    const newArray= arr.map((element)=>element*element).sort((a,b)=>a-b);
    return newArray;
}
console.log(makeSortedArray(arr));

//Or 

function sortedSquared(array)
{
    const newArray=new Array(array.length).fill(0);
    for(let i=0;i<array.length;i++)
    {
        newArray[i]=Math.pow(array[i],2);
    }
    newArray.sort((a,b)=>a-b);
    return newArray;

}
console.log(makeSortedArray(arr));

function sortedSquared1(array)
{
    const newArray=new Array(array.length).fill(0);
    let i=0;
    let j=array.length-1;
    for(let start=array.length-1;start>=0;start--)
    {
        const leftSquared=Math.pow(array[i],2);
        const rightSquared=Math.pow(array[j],2);
        if(leftSquared>rightSquared)
        {
            newArray[start]=leftSquared;
            i++;
        }
        else
        {
            newArray[start]=rightSquared;
            j--;
        }
    }
    return newArray;
}
console.log(sortedSquared1(arr));

