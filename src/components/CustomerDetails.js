import React from "react";
import "./CustomerDetails.css";

const CustomerDetails = props => {
  return (
    <div className="container">
      <i>functional component, no state</i>
      <h2>{"<CustomerDetails />"}</h2>
      <form>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={e => props.handleCustomerDetails(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={e => props.handleCustomerDetails(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              onChange={e => props.handleCustomerDetails(e)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;
