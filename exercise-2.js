/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
function grabCategories(obj) {
  return Object.keys(obj); // Is it better to 'return' instead of 'console.log'?
}
console.log(grabCategories(papaJohns));
console.log(grabCategories(papaJohns.pizzaToppings)); //BONUS

const verifyValues = (obj, num) => {
  if (Object.values(obj).length === num) {
    return true;
  }
  return false;
};
console.log(verifyValues(papaJohns, 4)); //false
console.log(verifyValues(papaJohns, 9)); //true

const getToppingsInfo = (place) => {
  return Object.entries(place.pizzaToppings); // Is it better to 'return' instead of 'console.log'?
};
console.log(getToppingsInfo(papaJohns));

papaJohns.printAd = (topping) => {
  return (
    "Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on " +
    topping +
    " for $" +
    papaJohns.pizzaToppings[topping] +
    ". Better Ingredients. Better Pizza. Papa John's."
  ); //got stuck trying to figure out the ...pizzaToppings[topping] part (I somehow only tried appending .topping or ["topping"], weirdly forgetting to try it without the quotation marks...); eventually referenced the solution to see that I was just barely off!
};
console.log(papaJohns.printAd("pepperoni"));
console.log(papaJohns.printAd("bacon"));

papaJohns.printAd = (topping) => {
  return `Welcome to Papa John's! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
}; //BONUS

papaJohns.address = "123 S Main St";
papaJohns.slogan = "PJ has it your way.";

console.log(papaJohns.printAd("extraSauce"));
console.log(papaJohns.printAd("peppers"));
