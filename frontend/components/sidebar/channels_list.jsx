import React from "react"

class ChannelsList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.channels.map(channel => {
                        return <ChannelsListItem 
                            key={channel.id}
                            channel={channel}
                            />
                    })}
                </ul>
            </div>
        )
    }

}

export default ChannelsList;