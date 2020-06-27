let beverage = 'corona';

const myObj = {
  a: 1,
  b: 2,
  c: 3,
  [beverage]: 'fever',
  beverage: beverage
};

console.log(myObj);

function addProp(obj, prop, value) {
  return (obj[prop] = [value]);
}

addProp(myObj, 'food', 'cheese maker');

console.log(myObj);

let val = myObj.food;

console.log(val);
