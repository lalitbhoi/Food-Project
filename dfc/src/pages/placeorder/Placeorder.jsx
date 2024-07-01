import React from 'react'
import './Placeorder.css'
import { useContext } from 'react'
import { StorContext } from '../../component/Context/StorContext'

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StorContext)

  return (
    <form className='place-order app'>
      <div className="place-order-left">
        <p className="title">Delivery Information </p>
        <div className="multi-felds">
          <input type="text" placeholder='First Name ' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-felds">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-felds">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country' />
        </div>
        <input type="number " placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-deails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-deails">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-deails">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          <button>PROCEED TO Payment</button>
        </div>

      </div>

    </form>
  )
}

export default Placeorder
