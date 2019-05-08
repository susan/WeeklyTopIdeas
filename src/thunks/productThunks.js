import { loadProducts } from "../actions/productAction"
import { addCartItem, addLineItem } from "../actions/cartAction"


export const getProducts = () => {
  console.log("in the products")
  return function thunk (dispatch) {
    return fetch("http://localhost:3000/api/v1/products")
  .then(resp => resp.json())
	.then(data => {
     console.log(data)
		dispatch(loadProducts(data))
	})
  }
}


export const createProduct = (product) => {
	console.log("thunkreport", product)
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify ({
        product
      })
    })
    .then(resp => resp.json())
    .then(data => {
    	console.log(data)
    	dispatch(addCartItem(data.product))
      dispatch(addLineItem(data.line_item))
    })
  }
}
