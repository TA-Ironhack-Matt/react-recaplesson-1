import React from "react";
import "./PaymentDetails.css";

export default class PaymentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: ""
    };
  }

  handleCardDetails = e => {
    this.setState({ cardNumber: e.currentTarget.value });
  };

  updateCardDetails = () => {
    this.props.handlePaymentDetails(this.state.cardNumber);
  };

  render() {
    return (
      <div className="container">
        <i>class component with state</i>
        <h2>{"<PaymentDetails />"}</h2>
        <pre>state:{JSON.stringify(this.state, "\t", 2)}</pre>
        <div>
          <label>
            card-number:
            <input
              type="text"
              name="cardNumber"
              onChange={e => this.handleCardDetails(e)}
            />
          </label>
          <div>
            <button onClick={this.updateCardDetails}>Validate & update</button>
          </div>
        </div>
      </div>
    );
  }
}
