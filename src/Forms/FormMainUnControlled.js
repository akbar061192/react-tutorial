import React, { Component } from "react";
import "./FormMain.css";

class FormMainUnControlled extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const textValue = this.refs.myInput.value;
    const emailValue = this.email.value;
    const paraValue = this.refs.myPara;
    paraValue.style.color = "red";

    console.log(textValue, emailValue, paraValue.textContent);
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myInput" />
          <input type="email" ref={(text) => (this.email = text)} />
          <button type="submit">submit</button>
          <p ref="myPara">this is a para</p>
        </form>
      </section>
    );
  }
}

export default FormMainUnControlled;
