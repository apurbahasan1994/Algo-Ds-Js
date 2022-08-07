function isoMorphicString(s, t) {
    const dict1 = {};
    const dict2 = {};
    for (let i = 0; i < s.length; i++) {
        if (((s[i] in dict1) && dict1[s[i]] !== t[i]) || (t[i] in dict2 && dict2[t[i]] !== s[i])) {
            return false;
        }

        dict1[s[i]] = t[i];
        dict2[t[i]] = s[i];

    }
    return true;
}

console.log(isoMorphicString('paper', 'title'));
// "badc"
// "baba"
// console.log(isoMorphicString('badc', 'baba'));