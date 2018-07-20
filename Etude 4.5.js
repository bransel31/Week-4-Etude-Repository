function prettyPrint(myObj){

   for (var p in myObj) {
    console.log(p + ': ' + myObj[p])
  }
}

let obj = {name: 'Brandon', age: 19}
prettyPrint(obj)
