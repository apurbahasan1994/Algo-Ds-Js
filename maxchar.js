function maxChar(str)
{
    const max_char={}
    for(let char of str)
    {
        if(!max_char[char])
        {
            max_char[char]=1
        }
        else{
            max_char[char]++
        }
    }
  for(let [key,values] of Object.entries(max_char)){
      if (values==Math.max(...Object.values(max_char))){
          return `"${key}"`
      }
  }
}

console.log(maxChar("helllo world"))