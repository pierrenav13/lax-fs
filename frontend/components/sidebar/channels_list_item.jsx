import React from "react";
class ChannelsListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li><a href="#">{this.props.channel.name}</a></li>
        )
    }
}



export default ChannelsListItem;