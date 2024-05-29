import React from "react";
import "./Cards.css";
import brands from '../../assets/kramet.png'
import brand from '../../assets/бренды2.png'
import bran from '../../assets/бренды3.png'
import brads from '../../assets/бренды4.png'
import lara from '../../assets/lara.png'
import cala from '../../assets/cala.png'
import berg from '../../assets/centek.png'
import centek from '../../assets/kramet.png'

const Cards = () => {
  return (
    <div>
        <div className="Cards_title">Brands</div>
      <div className="carts">
        <div className="use_card">
          <div className="use_img"><img src={brands} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={brand} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={bran} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={brads} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={lara} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={centek} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={cala} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
        <div className="use_card">
          <div className="use_img"><img src={berg} alt="brands" className="brands" /></div>
          <div className="use_txt"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
