//Solution 1
console.log("Solution 1")
console.log("\n")
function stringToNumber(str) {
    var result = 0
    //
    for (var i = 0; i < str.length; i++) {
        var currentChar = str.charAt(i);

        if ((currentChar === '-' && i === 0) || currentChar >= 0 || currentChar <= 9) {
            if (currentChar === '-' && i === 0) {
            } else {
                result = result + str.charAt(i) - '0';
            }

        } else {
            break;
        }
    }
    //In blew step we are cheking gor negative number if it is a negative number then we are assing that.
    if (str.charAt(0) === '-') {
        return -result;
    } else {
        return result;
    }

}

console.log("input: 42","       output: ",stringToNumber('42'))
console.log("input: 0","        output: ",stringToNumber('0'))
console.log("input: 42a","      output: ",stringToNumber('42a'))
console.log("input: 42a35","    output: ",stringToNumber('42a35'))
console.log("input: abc42","    output: ",stringToNumber('abc42'))
console.log("input: -42","      output: ",stringToNumber('-42'))

//Solution 2
console.log("\n")
console.log("Solution 2")
console.log("\n")
// * Inside get element by function there is no context fo btnNum variable so it will give undefined as result.
console.log("Inside get element by function there is no context fo btnNum variable so it will give undefined as result.")