import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import NavBarContainer from "../navbar/navbar_container";
class ChannelsListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let {channel} = this.props
        return (
            <li><a href={`/#/channels/${channel.id}`}>{channel.name}</a></li>
            // <li><Link to={`/api/channels/${channel.id}`}>{channel.name}</Link></li>
        )
    }
}



export default ChannelsListItem;