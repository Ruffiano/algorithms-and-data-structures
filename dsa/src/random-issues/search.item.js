
const restaurants = 
  [
    {"restaurant" : { "name" : "McDonald's",  "food" : "burger" }},
    {"restaurant" : { "name" : "KFC",        "food" : "chicken" }},
    {"restaurant" : { "name" : "Pizza Hut",  "food" : "pizza" }}
  ]

  let restaurant = restaurants.find(element => element.restaurant.food == 'chicken');

  console.log('1 restaurant: ', restaurant)

  //intead of for loop
  restaurants.map(element => {
    console.log('2 restaurant: ', element.restaurant.food)
  })