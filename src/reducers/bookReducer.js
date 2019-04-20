
const initialBookState = {
	books: [],
	selectedBook: null,
}

 export default function bookReducer(state = initialBookState, action){
   //console.log('%c bookReducer', 'color:orange', action)
   switch(action.type){

   	 case "SELECT_BOOK": {
      //console.log(action.payload)
     return { ...state, selectedBook: action.payload};
    }
     case "LOAD_BOOKS": {
       //console.log(action.payload)
     return { ...state, books: action.payload};
    }
    case "LOAD_PRICE": {
      //console.log(action.payload)
      let price = (action.payload)
      let newBookInfo ={...state.selectedBook, price}
      return{...state, selectedBook: newBookInfo};
    }

     default:
       return state;
   } //end of switch
 }//end of export
