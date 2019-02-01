// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  if(str.length!==1) {
    var last_letter = str[0]
    var reversed = ''
    var shortened_str = str.substring(0, (str.length-1))  + ""
    if(shortened_str!=="") {
      reversed += str[str.length-1]
      reversed += reverse(shortened_str)
      if(str.length-1!==1){
      return reversed}
      else{
        return reversed+last_letter
      }}}
  else {
    console.log('reached the end!')
    var reversed = ''
    return reversed
  }

}

console.log(reverse('apple'))
console.log('HELLO')
//module.exports = reverse;
