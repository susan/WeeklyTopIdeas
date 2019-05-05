import { loadReports } from "../actions/reportAction"
import { addCartItem, addLineItem } from "../actions/cartAction"


export const getReports = () => {
  console.log("in the reports")
  return function thunk (dispatch) {
    return fetch("http://localhost:3000/api/v1/reports")
  .then(resp => resp.json())
	.then(data => {
     console.log(data)
		dispatch(loadReports(data))
	})
  }
}


export const createReport = (report) => {
	console.log("thunkreport", report)
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify ({
         report
      })
    })
    .then(resp => resp.json())
    .then(data => {
    	console.log(data)
    	dispatch(addCartItem(data.report))
      dispatch(addLineItem(data.line_item))
    })
  }
}
