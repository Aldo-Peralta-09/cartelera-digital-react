const GET_EVENTS_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_EVENTS_PENDING": return state;
		case "GET_EVENTS_FULFILLED": return action.payload.data.events;
		case "GET_EVENTS_REJECTED": return state;
		default: return state;
    }
};

const GET_EVENT_REDUCER = (state = [], action) => {
    switch(action.type){
        case "GET_EVENT_PENDING": return state;
		case "GET_EVENT_FULFILLED": return action.payload.data.evento;
		case "GET_EVENT_REJECTED": return state;
		default: return state;
    }
};

const NEW_EVENT_REDUCER = (state = {}, action) => {
    switch(action.type){
        case "NEW_EVENT_PENDING": return { status: "Pending" };
		case "NEW_EVENT_FULFILLED": return action.payload.data;
		case "NEW_EVENT_REJECTED": return { status: "Error" };
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

export {GET_EVENTS_REDUCER,GET_EVENT_REDUCER,NEW_EVENT_REDUCER,DELETE_EVENT_REDUCER};