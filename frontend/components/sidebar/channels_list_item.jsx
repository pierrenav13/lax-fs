import React from "react";
class ChannelsListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li>{this.props.channel.name}</li>
        )
    }
}



export default ChannelsListItem;