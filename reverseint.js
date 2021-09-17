function reverserInt(num)
{
    sign=Math.sign(num)
    if (num<0){
        num=-1*num
    }
    str=''
    while(num!=0){
        let ans=num%10
        num=Math.floor(num/10)
        str=str+ans
    }
    return parseInt(str)*sign
}

console.log(reverserInt(-1215))