
const initialProductState = {
	products: [],
	selectedProduct: null,
}

 export default function productReducer(state = initialProductState, action){
   //console.log('%c bookReducer', 'color:orange', action)
   switch(action.type){

   	 case "SELECT_PRODUCT": {
      //console.log(action.payload)
     return { ...state, selectedProduct: action.payload};
    }
     case "LOAD_PRODUCTS": {
       //console.log(action.payload)
     return { ...state, products: action.payload};
    }

     default:
       return state;
   } //end of switch
 }//end of export
