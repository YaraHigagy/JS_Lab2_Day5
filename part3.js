// Objects predefined methods
const milk = {
  name: "Lamar",
  type: "FullFat",
  price: 5,
};

const key = Object.keys(milk);
const milka = Object.create(milk);
milka.name = "Milka";
milka.type = "ZeroFat";
milka.price = 10;
const banana = Object.assign(milka, milk);
const values = Object.values(milka);
const entry = Object.entries(banana);
const suger = Object.freeze(milk);


function objectsPredefinedMethods(){
  // alert(`object.Keys: ${key}\n\
  // object.create: ${milka}\n\
  // object.assign: ${banana}\n\
  // `);
  console.log(key);
  console.log(milk);
  console.log(milka);
  console.log(banana);
  console.log(milk);
  console.log(values);
  console.log(entry);
  console.log(suger);
  console.log(Object.getPrototypeOf(suger));
  console.log(Object.seal(banana));
  console.log(Object.isFrozen(milk));
  console.log(Object.isSealed(banana));
  console.log(Object.hasOwn(suger, 'price'));
}

// ==================================================
// Arrays predefined methods
const arr1 = [1, 3, 5, "a", "r", "t", milk, function func(){ }];
const arr2 = [23, 45, 56];
const arr = arr1.concat(arr2);
const arrX = Array.from("vdfknoei390iwje");
const arr3 = [1, 2, 3, 4];
//const arr4 = arr3.splice(3, 3, "Blossom", "Bubbles", "Buttercup");

function arraysPredefinedMethods(){
  console.log(arr1.sort());
  console.log(arr);
  console.log()
  console.log(arr.entries());
  console.log(arr.fill("bla", 3, 5));
  console.log(arrX);
  console.log(arrX.length);
  console.log(arrX.join( " ^_^ " ));
  console.log(arr.copyWithin(3, 0, 4));
  console.log(arr3.splice(0, 3));
}

// ==================================================
// Nested Functions

// >> there is examples within the tasks

// function nestedFunc(){

// }