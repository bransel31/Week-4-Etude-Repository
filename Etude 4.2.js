function reverse(array) {
  let reversed = ''
  array.forEach(function(each){
    reversed = each + ", " + reversed
  })
  reversed = '[ ' + reversed + ']'
  return reversed
}

let my_arr = [1,2,3,4,5]
const result = reverse(my_arr)
console.log(result)
