import React from "react";
import img from '../assets/images/mebel.jpeg'
import sign from '../assets/images/IMAGE (2).svg'

const details = document.querySelectorAll('details');

details.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const openItem = document.querySelector('details[open]');

    if (openItem) openItem.open = false;

    if (openItem !== item) item.open = true
  })
})



const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 class="gradient-title">Everything for the coziness and comfort of your home!</h1>
      <div className="section">
        <img src={img} alt="img" className="img" />
        <div className="info">
          <p className="about_text">Welcome to "HomeHarmony" - a store where your home comes to life!
            We offer a wide range of home goods that will help create coziness, style and comfort in
            every corner of your home:</p>
          <div className="icons_img">
            <img src={sign} alt="sign" className="sign" />
            <p>Wide range: From furniture and decor to kitchen utensils and bed linen
              - we have everything you need for your home</p>
          </div>
          <div className="icons_img">
            <img src={sign} alt="sign" className="sign" />
            <p>High Quality: We carefully select products from
              trusted manufacturers so you can be confident in their quality and durability.</p>
          </div>
          <div className="icons_img">
            <img src={sign} alt="sign" className="sign" />
            <p>Style and design: Modern and classic styles, unique
              design solutions and trendy new items - find what suits your interior perfectly.</p>
          </div>

        </div>
      </div>
      <div className='zogo'>Frequently Asked Questions</div>
      <details className="details">
        <summary className="details__title"> What types of products do you offer?</summary>
        <div class="details__content">
          <p>We offer a wide range of home goods, including furniture, kitchenware, home decor, bedding, bathroom essentials, and storage solutions. Browse our categories to find everything you need to make your home cozy and stylish.</p>

        </div>
      </details>
      <details className="details">
        <summary className="details__title">How can I place an order?</summary>
        <div class="details__content">
          <p>Placing an order is simple. Just browse our website, add the items you want to your cart, and proceed to checkout. Follow the instructions to enter your shipping and payment information, and confirm your order.</p>
        </div>
      </details>
      <details className="details">
        <summary className="details__title">What payment methods do you accept?</summary>
        <div class="details__content">
          <p>We accept various payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options.</p>
        </div>
      </details>
      <details className="details">
        <summary className="details__title">Can I cancel or modify my order after it has been placed?</summary>
        <div className="details__content">
          <p>If you need to cancel or modify your order, please contact our customer service team as soon as possible. If the order has not yet been processed or shipped, we will do our best to accommodate your request.</p>
        </div>
      </details>

    </div>

  );
};

export default AboutUs;
