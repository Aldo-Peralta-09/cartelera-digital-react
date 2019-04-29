const GET_USERS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_USERS_PENDING": return state;
		case "GET_USERS_FULFILLED": return action.payload.data.users;
		case "GET_USERS_REJECTED": return state;
		default: return state;
    }
};

const GET_EVENTS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_EVENTS_PENDING": return state;
		case "GET_EVENTS_FULFILLED": return action.payload.data.events;
		case "GET_EVENTS_REJECTED": return state;
		default: return state;
    }
};

export {GET_USERS_REDUCER,GET_EVENTS_REDUCER};