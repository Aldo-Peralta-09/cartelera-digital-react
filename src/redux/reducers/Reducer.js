const GET_USERS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_USERS_PENDING": return state;
		case "GET_USERS_FULFILLED": return action.payload.data.users;
		case "GET_USERS_REJECTED": return state;
		default: return state;
    }
};

const NEW_USER_REDUCER = (state = [], action) => {
    switch(action.type){
        case "NEW_USER_PENDING": return state;
		case "NEW_USER_FULFILLED": return action.payload.data;
		case "NEW_USER_REJECTED": return state;
		default: return state;
    }
};

const DELETE_USER_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_USER_PENDING": return { status: "Pending" };
		case "DELETE_USER_FULFILLED": return action.payload.data;
		case "DELETE_USER_REJECTED": return { status: "Error" };
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

const DELETE_EVENT_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "DELETE_EVENT_PENDING": return { status: "Pending" };
		case "DELETE_EVENT_FULFILLED": return action.payload.data;
		case "DELETE_EVENT_REJECTED": return { status: "Error" };
		default: return state;
    }
};

export {GET_USERS_REDUCER,NEW_USER_REDUCER,DELETE_USER_REDUCER,GET_EVENTS_REDUCER,DELETE_EVENT_REDUCER};