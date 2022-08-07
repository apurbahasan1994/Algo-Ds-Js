//time n , space n
function twoSum(array,target) {
    const dict = {};
   const ans=[];
    for (let i = 0; i < array.length; i++) {
        const targetValue=target-array[i];
        if(!(targetValue in dict)){
            dict[array[i]]=i;
        }
        else{
            ans.push([i,dict[targetValue]]);
        }
    }
    return ans;
}
console.log(twoSum([2,7,3,-1,4],2));
console.log(twoSum([1,-2,3,4,5],3));