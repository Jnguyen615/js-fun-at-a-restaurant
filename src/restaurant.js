function createRestaurant(name) {
  return {
    name: name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: []
    }
  }
}

function addMenuItem(restaurant, pizza) {
  
  if (!restaurant.menus[pizza.type].includes(pizza)) {  
        restaurant.menus[pizza.type].push(pizza)
  }
}      
        
function removeMenuItem (restaurant, item, orderType) {
  var menu = restaurant.menus[orderType]
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === item) {
        menu.splice(i, 1)
      return `No one is eating our ${item} - it has been removed from the ${orderType} menu!`
      }
  } 
      return `Sorry, we don't sell ${item}, try adding a new recipe!`
}
      
function checkForFood (restaurant, foodItem) {
  var menu = restaurant.menus[foodItem.type]
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`
    } 
  }
      return `Sorry, we aren't serving ${foodItem.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}