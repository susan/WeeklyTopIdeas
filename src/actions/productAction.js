

export const selectProduct = (product) => {
  return {
     type: "SELECT_PRODUCT",
     payload: product
  }
}

export const loadProducts = (products) => {
  return {
     type: "LOAD_PRODUCTS",
     payload: products
  }
}


