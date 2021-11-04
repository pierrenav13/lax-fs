import { RECEIVE_SUBSCRIPTIONS } from "../actions/subscription_actions";


const subscriptionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SUBSCRIPTIONS:
            newState = {}
            action.memberships.forEach(membership => {
                newState[membership.id] = membership
            })
            return newState;
        default:
            return state;

    }

}



export default subscriptionsReducer;