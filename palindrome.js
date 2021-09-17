function paindrome(str){
    reversed=str.split("").reverse().join('')
    return str===reversed

}

console.log(paindrome("abbac"))