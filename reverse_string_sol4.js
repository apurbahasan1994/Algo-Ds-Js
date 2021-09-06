function reverse(string_value)
{
    return string_value.split('').reduce((reverse,char)=>{return char+reverse},'')
}

console.log(reverse('apurba'))