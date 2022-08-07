//Given a string s, find the length of the longest substring without repeating characters.

function longestSubstr(s){
    let i=0;
    let dict={};
    const ans=[];
   while(i<s.length){
    if(s[i] in dict){
        dict={};
        ans.push(i);
        i--;
    }
    else{
        dict[s[i]]=i;
        i++;
    }
   }
   console.log(ans);
    
}

// longestSubstr('pwwkew');
longestSubstr('abcabcbb');
// longestSubstr('bbbbb');