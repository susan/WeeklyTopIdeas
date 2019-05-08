export const addCartItem = (product) => {
	return {
		type: "ADD_CART_ITEM",
    payload: product
	}
}

export const removeCartItem = (product) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: product
  }
}


export const getCart = (carts) => {
	return {
		type: "GET_CART",
    payload: carts
	}
}


export const clearCart = (carts) => {
	return {
		type: "CLEAR_CART",
    payload: carts
	}
}

export const getCartItems = (itemArray) => {
   return {
   type: "GET_CART_ITEMS",
   payload: itemArray
   }
}


export const addLineItem = (lineItem) => {
  return {
    type: "ADD_LINE_ITEM",
    payload: lineItem
  }
}

export const getCartLineItems = (itemArray) => {
   return {
   type: "GET_CART_LINE_ITEMS",
   payload: itemArray
   }
}

export const removeLineItem = (lineItem) => {
  return {
    type: "REMOVE_LINE_ITEM",
    payload: lineItem
  }
}

