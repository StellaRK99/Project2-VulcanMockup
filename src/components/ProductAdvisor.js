import React from "react";

export default function ProductAdvisor() {
  return (
    <section className="productAdvisor">
      <div className="heading">
        <h1>PRODUCT ADVISOR</h1>
        <p>Find your project's perfect fit.</p>
        <hr />
      </div>
      <div className="form">
        <form action="get">
          <div>
            <label htmlFor="productType">Product Type</label>
            <select name="productType" id="productType" placeholder="Select">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="screenLocation">Screen Location</label>
            <select
              name="screenLocation"
              id="screenLocation"
              disabled="disabled"
            >
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="flowType">Flow Type</label>
            <select name="flowType" id="flowType" disabled="disabled">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="channelDepth">Channel Depth</label>
            <select name="channelDepth" id="channelDepth" disabled="disabled">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="channelWidth">Channel Width</label>
            <select name="channelWidth" id="channelWidth" disabled="disabled">
              <option value="">Select</option>
            </select>
          </div>

          <button>FIND MY PRODUCT</button>
        </form>
      </div>
    </section>
  );
}
