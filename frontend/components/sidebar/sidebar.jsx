import React from "react";
import ChannelsList from "./channels_list";

class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestAllChannels();
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <h2>{this.props.currentUser.username}</h2>
                <ul>
                    <ChannelsList
                        channels={this.props.channels}
                    />
                </ul>
            </div>
        )
    }
}

export default Sidebar;