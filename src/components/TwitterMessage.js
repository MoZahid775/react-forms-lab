import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {

      message : "type message... "
    };
  }



 inputHandler = (event) => {
  this.setState({message: event.target.value}) 
  
}



render() {
   console.log(this.props.maxChars-this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.inputHandler} value={this.state.message}/>
        <br></br>
        <strong>You have {this.props.maxChars-this.state.message.length} characters remaining</strong>     
      </div>
    );
  }
}

export default TwitterMessage;

