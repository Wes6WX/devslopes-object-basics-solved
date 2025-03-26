/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const hibachiGrill = {
  name: "Hibachi Grill",
  cuisines: ["fried rice", "sushi", "lo mein", "mei fun"],
  numberOfStars: 3.9,
  favorited: false,
};

hibachiGrill.address = "675 Bethlehem Pike";
hibachiGrill.zipcode = "18936";
hibachiGrill.acceptsReservations = true;

hibachiGrill.numberOfStars++;
hibachiGrill.favorited = !hibachiGrill.favorited;
hibachiGrill.cuisines.push("french fries");

function retrieveProperty(obj, key) {
  if (obj[key] === undefined) {
    return console.log("The information you requested does not exist.");
  }
  console.log(obj[key]);
}
retrieveProperty(hibachiGrill, "cuisines");
retrieveProperty(hibachiGrill, "favorited");
retrieveProperty(hibachiGrill, "name");
retrieveProperty(hibachiGrill, "nickName");
retrieveProperty(hibachiGrill, "state");
