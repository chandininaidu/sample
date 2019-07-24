import axios from 'axios';
const initialState = {
  value: 0,
};

function addReducer(state = initialState, action) {
  const {data}=action;
  switch(action.type) {
    
    case 'VIEWPROJECT':
       
      return { 
        ...state,value:data
      };
      case 'VIEWSUBPROJECTS':
        return{

      }
    default:
      return state;
  }
}

export default addReducer;
