import React from 'react';
import ChatRoomContainer from "../message/chat_room_container";
import SidebarContainer from "../sidebar/sidebar_container";

class ChannelView extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestAllChannels()
    }
    
    render(){
        
        return (
            <div className='greeting'>
                <div className='header'>
                    <div><h1>lax</h1></div>
                    <div className='log-sign'>
                        <a onClick={this.props.logout}>Log Out</a>
                    </div>
                </div>
                <div className='sidebar'>
                    <div id='s-bar'>
                        <SidebarContainer />
                    </div>
                    <div className='chat'><ChatRoomContainer channelId={this.props.channel}/></div>
                </div>
            </div>
        )
    }
}

export default ChannelView;