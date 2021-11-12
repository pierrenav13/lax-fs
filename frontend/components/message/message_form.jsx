import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: "",
            authorId: this.props.currentUser.id
        };
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(App.cable.subscriptions.subscriptions[0])
        App.cable.subscriptions.subscriptions[0].speak({ message: this.state});
        this.setState({ body: "" });
    }

    render() {
        return (
            <div>
                <form className='message-form' onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className='message-input'
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Type message here"
                    />
                    <button className='message-submit' type="submit"><i className="fas fa-caret-square-right"></i></button>
                    {/* <input type="submit" /> */}
                </form>
            </div>
        );
    }
}

export default MessageForm;