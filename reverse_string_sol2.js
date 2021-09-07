function reverse(string_value){
    let newStr=''
    for(let char of string_value)
    {
        newStr=char+newStr;
    }
    return newStr;

}

console.log(reverse("Apurba"));