import React from "react";
import Videos from '../components/Videos/Videos'

const Delivery = () => {
  return (
    <div className="delivery-container">
      <h1>Delivery Information</h1>

      <h2>General Delivery Information</h2>
        <div className="deliver_txt">
          <h2>Delivery Times</h2>
          <ul className="del">
            <li><strong>Standard Delivery:</strong> 3-7 business days.</li>
            <li><strong>Express Delivery:</strong> 1-3 business days.</li>
            <li><strong>International Delivery:</strong> 7-14 business days.</li>
          </ul>

          <h2>Delivery Costs</h2>
          <ul className="del">
            <li><strong>Standard Delivery:</strong> 300 RUB. Free for orders over 3000 RUB.</li>
            <li><strong>Express Delivery:</strong> 500 RUB.</li>
            <li><strong>International Delivery:</strong> from 1000 RUB, depending on the region.</li>
          </ul>
      </div>


      <h2>Delivery Partners</h2>
      <p>We partner with leading delivery services such as UPS, DHL, FedEx, and Kyrgyzstan Post to ensure fast and reliable delivery.</p>

      <h2>Order Tracking</h2>
      <p>You can track the status of your order using the tracking number that will be sent to you by email after your order is shipped.</p>

      <h2>Frequently Asked Questions (FAQ)</h2>
      <ul className="del">
        <li><strong>How can I find out the cost of delivery?</strong> The delivery cost is calculated automatically when placing an order and depends on the chosen delivery method and region.</li>
        <li><strong>Can I change the delivery address?</strong> Yes, you can change the delivery address if the order has not yet been shipped. Please contact our support team to make changes.</li>
      </ul>
    <Videos />
    </div>
  );
};

export default Delivery;
