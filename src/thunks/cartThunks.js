import { removeLineItem, removeCartItem } from "../actions/cartAction"

export const deleteCartItem = (lineItem) => {
  console.log(lineItem.id)
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/line_items/${lineItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        lineItem

      })
    })
   .then(resp=> resp.json())
  .then(data => {
    console.log(data)
    dispatch(removeLineItem(data.cart))
    dispatch(removeCartItem(data.product))
   })
  }
}
