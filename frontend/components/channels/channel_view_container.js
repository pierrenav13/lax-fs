import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import ChannelView from "./channel_view";
import { requestAllChannels } from "../../actions/channel_actions";
import { requestSubscriptions } from "../../actions/subscription_actions";

const mSTP = (state, ownProps) => {
    //console.log(ownProps)
    return {
        currentUser: state.entities.users[state.session.id],
        channel: ownProps.match.params.channelId
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestSubscriptions: (channelId) => dispatch(requestSubscriptions(channelId))
});

export default connect(mSTP, mDTP)(ChannelView)

