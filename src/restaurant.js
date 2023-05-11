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

function addMenuItem(restaurant, item) {
  if (item.type === 'lunch' && !restaurant.menus.lunch.includes(item)) {  
      restaurant.menus.lunch.push(item)
    } else if 
      (item.type === 'breakfast' && !restaurant.menus.breakfast.includes(item)) {
      restaurant.menus.breakfast.push(item) 
    } else {
      restaurant.menus.dinner.push(item)
    }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}