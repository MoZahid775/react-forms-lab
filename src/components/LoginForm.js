import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {

      username:" ",
      password:" "
    };
  }


 stateHandler =(event) => {
   
  this.setState({[event.target.name]: event.target.value })
    
 }


 formHandler = event => {
     event.preventDefault()
     
     if (!this.state.username || !this.state.password) return
      
      this.props.handleLogin(this.state)
    }

// why must return be on line 25 ....why must there no tbe surly braces???
    
    
    




  render() {
    return (
      <form onSubmit={this.formHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  onChange={this.stateHandler} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.stateHandler} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
