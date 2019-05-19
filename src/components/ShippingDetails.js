import React from "react";
import "./ShippingDetails.css";

const ShippingDetails = props => {
  return (
    <div className="container">
      <i>functional component, no state</i>
      <h2>{"<ShippingDetails />"}</h2>
      <form>
        <div>
          <label>
            Streetname:
            <input
              type="text"
              name="street"
              onChange={e => props.handleShippingDetails(e)}
            />
          </label>
        </div>
        <div>
          <label>
            houseNumber:
            <input
              type="number"
              name="houseNumber"
              onChange={e => props.handleShippingDetails(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              onChange={e => props.handleShippingDetails(e)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;
