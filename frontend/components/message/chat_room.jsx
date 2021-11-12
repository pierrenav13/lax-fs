import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
        this.loadChat = this.loadChat.bind(this);
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { 
                channel: "ChatChannel", 
                type: 'Channel',
                chatId: this.props.channelId
            },
            {
                received: data => {
                    console.log(data)
                    //debugger
                    switch(data.type){
                        case "message":
                            this.props.receiveMessage(data.message);
                            this.setState({ messages: this.state.messages.concat(data.message)})
                            break;
                    }
                    //this.props.receiveMessage(data.message)
                    //Need action to add a new message to existing messages and pass as prop
                },
                speak: function (data) {
                    // debugger
                    console.log(data)
                    return this.perform("speak", data);
                },
                load: function () { return this.perform("load") }
            }
        );
        //this.loadChat();
    }

    loadChat(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        //this.props.requestAllMessages(this.props.channel.id)
        //this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = this.state.messages.map(message => {
            console.log(message)
            return (
                <li key={message.id}>
                    <div>
                        <p className='message-username'>demo</p>
                        <p>{message.created_at.toLocaleString}</p>
                    </div>
                    
                    <div>{message.body}</div>
                    
                    <div ref={this.bottom} />
                </li>
            );
        });
        return (
            <div className="chatroom-container">
                {/* <button className="load-button"
                    onClick={this.loadChat.bind(this)}>
                    Load Chat History
                </button> */}
                <div className="message-list">{messageList}</div>
                <MessageForm currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default ChatRoom;