import {
  SELECT_APPOINTMENT,
  UPDATE_APPOINTMENT,
  TRACK_APPOINTMENT,
  TOGGLE_DIALOG
} from '../actions/time-slots';

const initialState = {
  updateData: [
    {
      time: "9:00am",
      name: "",
      phone: "",
      available: true
    },
    {
      time: "10:00am",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "11:00am",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "12:00pm",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "1:00pm",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "2:00pm",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "3:00pm",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "4:00pm",
      name: '',
      phone: '',
      available: true
    },
    {
      time: "5:00pm",
      name: '',
      phone: '',
      available: true
    }
  ],
  selectedAppointment: {
    time: '',
    name: '',
    phone: '',
    available: true
  }
};

// just using 1 reducer since so few things to keep track of..
export default function rootReducer(state = getInitialState(), action) {
  console.log('reducer - state', state, 'action', action);
  switch (action.type) {
    // case TOGGLE_DIALOG:
    //   let newState = {
    //     ...state,
    //     open: !state.open
    //   }
    //   localStorage.setItem('data', JSON.stringify(newState));
    //   return newState 
    case SELECT_APPOINTMENT:
      console.log('reducer-SELECT_APPOINTMENT', action);
      return {
        ...state,
        selectedAppointment: action.data
      }      
    case TRACK_APPOINTMENT:
      console.log('reducer-TRACK_APPOINTMENT', action);
      return {
        ...state,
        selectedAppointment: action.data
      };

    case UPDATE_APPOINTMENT:
      console.log('reducer-UPDATE_APPOINTMENT', action);
      return {
        ...state,
        updateData: action.updateData
      }

    default:
      return state;
  }
}

const getInitialState = () => {
  let localData = JSON.parse(localStorage.getItem('data'));
  if (localData) {
    console.log('localData', localData);
    return localData
  } else {
    console.log('initialState', initialState);
    return initialState
  }
}

console.log('getInitialState', getInitialState());

// // export default function reducer(state = initialState, action) {
// // 	if(action.type === SELECT_APPOINTMENT) {
// // 		return Object.assign({}, state,  {
// // 			data: action.data
// // 		});	
// // 	} else if (action.type === UPDATE_APPOINTMENT) {
// // 		return Object.assign({}, state, {
// // 			updateData: action.updateData
// // 		});
// // 	}
// // 	return state;
// // } 


