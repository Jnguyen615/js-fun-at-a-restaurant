function nameMenuItem(menuItem) {
  return `Delicious ${menuItem}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, list) {
  if (!list.includes(ingredient))
      list.push(ingredient)
}

function formatPrice(initialPrice) {
  return `$${initialPrice}` 
}

function decreasePrice(decreasedPrice) {
  decreasedPrice *= .9
    return decreasedPrice
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type 
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


