import { connect } from "react-redux";
import { requestAllChannels } from "../../actions/channel_actions";
import Sidebar from "./sidebar";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channels: Object.values(state.entities.channels)
    }
}

const mDTP = (dispatch) => ({
    requestAllChannels: () => dispatch(requestAllChannels()),
})

export default connect(mSTP, mDTP)(Sidebar)