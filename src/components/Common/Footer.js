import React from 'react'
import footerImg from '../../assets/img/Hunger-Captian-bottom.png'
import cartImg from '../../assets/img/cartimg.png'

const Footer = ({ price, showCart, setShowCart }) => {
  return (
    <footer>
      <div className='subtotal'>
        <p>SubTotal:</p>
        <p>${price}</p>
      </div>
      {showCart ? (
        <div className='cart'>
          <button onClick={() => setShowCart(false)}>Go back Home</button>
        </div>
      ) : (
        <div className='cart'>
          <button onClick={() => setShowCart(true)}><img src={cartImg}/> Cart</button>
        </div>
      )}
      <img class="footer-logo" src={footerImg} alt="" />
      <div class="closing">
        <p>Premium Quality food at the best and most affordable price.</p>
        <p>We have a new offer every day for 365 days</p>
      </div>
      <div class="contact">
        <h5>Contact</h5>
        <p>Email: Quickfood@hungercaptain.com | Hotline : +1 131 138 138</p>
      </div>
      <div class="copyright">
        <p>DESIGN BY HUNGER CAPTIAN - © 2022. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}

export default Footer