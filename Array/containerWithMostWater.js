function mostWaterContainer(arr){
    let maxArea=Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            const area=Math.min(arr[i],arr[j])*(j-i);
            maxArea=area>=maxArea?area:maxArea;
        }
    }
    if(maxArea==Number.MIN_VALUE)
    {
        console.log(0);
        return;
    }
    console.log(maxArea);

}
function twoPointerApproach(arr)
{
    let startPointer=0;
    let endPointer=arr.length-1;
    let maxArea=0;
    while(startPointer<endPointer)
    {
        const area=Math.min(arr[startPointer],arr[endPointer])*(endPointer-startPointer);
        maxArea=Math.max(area,maxArea);
       if(arr[startPointer]<arr[endPointer])
       {
        startPointer++;
       }
       else{
        endPointer--;
       }
    }
    console.log(maxArea);
}
mostWaterContainer([1,5,6,3,4]);
mostWaterContainer([10,6,5,6,5,7]);
mostWaterContainer([]);
mostWaterContainer([10]);
mostWaterContainer([9,1,2,3,10]);
twoPointerApproach([1,5,6,3,4]);
twoPointerApproach([10,6,5,6,5,7]);
twoPointerApproach([]);
twoPointerApproach([10]);
twoPointerApproach([9,1,2,3,10]);
