// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let to_Str = n.toString();
    let neg = false
    if(to_Str[0]==="-") {
        neg = true
        to_Str = to_Str.split('').slice(1).join('')
    }
    let reversed = to_Str.split('').reverse().join('')
    let output = parseInt(reversed)
    if(neg) {
        output*=-1
    }
    return output
}

module.exports = reverseInt;
