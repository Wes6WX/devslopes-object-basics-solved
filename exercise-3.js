// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(obj) {
  for (const key in obj) {
    console.log(key, obj[key]); //initially opted for Object.entries()
  }
}
// printPizzaPlace(dominos);

function toppingsPriceRange(pizzaPlace) {
  let low = 100; //didn't consider the idea of using "Infinity" at first!
  let high = 0;
  for (const key in pizzaPlace.pizzaToppings) {
    if (pizzaPlace.pizzaToppings[key] < low) {
      //mistakenly tried directly comparing ...[key] to ...[key + 1] instead of using the variables I had already created as placeholders
      low = pizzaPlace.pizzaToppings[key];
    } else if (pizzaPlace.pizzaToppings[key] > high) {
      high = pizzaPlace.pizzaToppings[key];
    }
  }
  return [low, high];
}
console.log(toppingsPriceRange(dominos));

const calculateAverageRating = (pizzaPlace) => {
  let sum = 0;
  let entryCount = Object.values(pizzaPlace.starReviews).length;
  for (var i in pizzaPlace.starReviews) {
    sum += pizzaPlace.starReviews[i];
  }
  return sum / entryCount;
};
console.log(calculateAverageRating(dominos));
