import { RECEIVE_SUBSCRIPTIONS } from "../actions/subscription_actions";


const subscriptionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch (action.type) {
        case RECEIVE_SUBSCRIPTIONS:
            newState = {}
            action.subscriptions.forEach(subscription => {
                newState[subscription.id] = subscription
            })
            // return Object.assign({}, nextState, newState);
            return newState;
        default:
            return state;

    }

}



export default subscriptionsReducer;