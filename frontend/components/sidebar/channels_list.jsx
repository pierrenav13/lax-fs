import React from "react"
import ChannelsListItem from "./channels_list_item"

class ChannelsList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>
                    All DM's
                </h3>
                <h4>Channels</h4>
                <ul className='c-list'>
                    {this.props.channels.map(channel => {
                        return <ChannelsListItem 
                            key={channel.id}
                            channel={channel}
                            />
                    })}
                    <li>Add channel</li>
                </ul>
            </div>
        )
    }

}

export default ChannelsList;