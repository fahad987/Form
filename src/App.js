import React, { Component } from "react";
import './App.css';

class App  extends Component{
  render(){
    return(
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
         <input 
            type="text" 
            className="" 
            placeholder="First Name" 
            name="firstname" 
            noValidate
            onchange={this.handleChange}
            />
            </div>
    
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
         <input 
            type="text" 
            className="" 
            placeholder="Last Name" 
            name="lastname" 
            noValidate
            onchange={this.handleChange}
            />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
         <input 
            type="email" 
            className="" 
            placeholder="email" 
            name="email" 
            noValidate
            onchange={this.handleChange}
            />
            </div>
    
            <div className="password">
              <label htmlFor="password">Password</label>
         <input 
            type="text" 
            className="" 
            placeholder="Password" 
            name="password" 
            noValidate
            onchange={this.handleChange}
            />
            </div>
    
            <div className="confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
         <input 
            type="text" 
            className="" 
            placeholder="Confirm Password" 
            name="confirmPassword" 
            noValidate
            onchange={this.handleChange}
            />
            </div>
            <div className="createAccount">
               <button type="submit">Register Now</button>

            </div>
          </form>

        </div>
        <small>Already Have an Account? Sign In</small>
      </div> 
    );
  }
}
export default App;

