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

function addIngredients(ingredient, ingredients) {
    ingredients.push(ingredient)
   if (ingredients.includes(ingredient)) {
    
   }
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


