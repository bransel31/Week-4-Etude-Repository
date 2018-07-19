function average(numArray){
  let total = 0
  numArray.forEach(function(num){
    total += num;
  })
  let mean = total / numArray.length

  return mean
  }


let my_arr = [1, 2, 3, 4, 5]
const result = average(my_arr)
console.log(result)
