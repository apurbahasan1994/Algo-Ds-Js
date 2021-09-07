function reverse(string_value){
    let newStr=string_value.split('');

    let i=0;
    let j=newStr.length-1;
    while(i<j)
    {
        let temp=newStr[i]
        newStr[i]=newStr[j]
        newStr[j]=temp
        i++;
        j--;
    }
    
    return newStr.join('')

}

console.log(reverse("Apurba"));