import React from "react";
import "./CssFiles/Talk.css";

class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "", // Add a new state for the message
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", this.state);
  };

  render() {
    return (
      <div className="talk-container">
        <div className="main-title">
          <h1>Let Chat With Me</h1>
        </div>
        <div className="talk-content">
          <div className="text-content">
            <div className="talk-main-heading">
              <h1>Hey</h1>
              <h1>Let's Make</h1>
              <h1>Something Great.</h1>
            </div>
            <div className="main-paragraph">
              <p>
                Crafting beautiful code is a delightful art in web development
                and design. It's a symphony of creativity and precision, a dance
                of pixels and logic. With coffee in hand, the magic unfolds.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <label>
          
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </label>
            <label>

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </label>
            <label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
    
                   <textarea
                name="message"
                placeholder="Type Your Message"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
     
        </div>
      </div>
    );
  }
}

export default Talk;
