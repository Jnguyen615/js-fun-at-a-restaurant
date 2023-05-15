function takeOrder (order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderId, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderId === orderId) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var items = []
    for (var i = 0; i < deliveryOrders.length; i++) {
      items.push(deliveryOrders[i].item)
    }
    var itemList = items.join(', ')
      return itemList 
}

function searchOrder(deliveryOrders, item) {
  var whichOrder = false
    for (var i = 0; i < deliveryOrders.length; i++) {
      if (deliveryOrders[i].item === item) {
        whichOrder = true
      } 
    }
      return whichOrder
}
    
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}