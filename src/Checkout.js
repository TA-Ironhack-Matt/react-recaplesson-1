import React, { Component } from "react";
import "./Checkout.css";
import CustomerDetails from "./components/CustomerDetails";
import PaymentDetails from "./components/PaymentDetails";
import ShippingDetails from "./components/ShippingDetails";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDetails: {
        firstName: "",
        lastName: "",
        dateOfBirth: ""
      },
      shippingDetails: {
        street: "",
        houseNumber: "",
        zipCode: ""
      },
      paymentDetails: {
        cardNumber: ""
      }
    };
  }

  handleChange = e => {
    var customerDetails = this.state.customerDetails;
    var shippingDetails = this.state.shippingDetails;

    switch (e.currentTarget.name) {
      case "firstName":
        customerDetails.firstName = e.currentTarget.value;
        this.setState({ customerDetails });
        break;
      case "lastName":
        customerDetails.lastName = e.currentTarget.value;
        this.setState({ customerDetails });
        break;
      case "dob":
        customerDetails.dateOfBirth = e.currentTarget.value;
        this.setState({ customerDetails });
        break;
      case "street":
        shippingDetails.street = e.currentTarget.value;
        this.setState({ shippingDetails });
        break;
      case "houseNumber":
        shippingDetails.houseNumber = e.currentTarget.value;
        this.setState({ shippingDetails });
        break;
      case "zipCode":
        shippingDetails.zipCode = e.currentTarget.value;
        this.setState({ shippingDetails });
        break;
      default:
        break;
    }
  };

  updateCardNumber = card => {
    var paymentDetails = this.state.paymentDetails;
    paymentDetails.cardNumber = card;
    this.setState({ PaymentDetails });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="state-container">
          <h2>{"State of <Checkout /> component"}</h2>
          <pre>{JSON.stringify(this.state, "\t", 2)}</pre>
        </div>
        <div>
          <CustomerDetails handleCustomerDetails={this.handleChange} />
          <ShippingDetails handleShippingDetails={this.handleChange} />
          <PaymentDetails handlePaymentDetails={this.updateCardNumber} />
        </div>
      </div>
    );
  }
}
