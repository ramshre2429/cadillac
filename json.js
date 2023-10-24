let obj1={name:"Person 1", age:5}
let obj2={age:5, name:"Person 1"}
console.log(_.isEqual(obj1,obj2)) //Equality of the object will be checked regardless of the order of the keys in the object
JSON.stringify(obj1)===JSON.stringify(obj2) 