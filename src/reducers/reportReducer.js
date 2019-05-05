
const initialReportState = {
	reports: [],
	selectedReport: null,
}

 export default function reportReducer(state = initialReportState, action){
   //console.log('%c bookReducer', 'color:orange', action)
   switch(action.type){

   	 case "SELECT_REPORT": {
      //console.log(action.payload)
     return { ...state, selectedReport: action.payload};
    }
     case "LOAD_REPORTS": {
       //console.log(action.payload)
     return { ...state, reports: action.payload};
    }

     default:
       return state;
   } //end of switch
 }//end of export
