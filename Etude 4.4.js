function flatten(){
  let s = []
  for (let i=0; i < arguments.length; i++){
    if(i < arguments.length - 1)
      s += arguments[i] + ','
    else
      s += arguments[i]
  }
  return s
}

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [11,12,13,14]
console.log(flatten(arr1,arr2,arr3))
