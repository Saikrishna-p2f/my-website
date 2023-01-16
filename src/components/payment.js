import React from "react";
import pay from './pay.module.css'

import atmImg from "../images/card_img.png"

function Payment() {
  return (
    <div>
      <div className={pay.container}>
        <form>
          <div className={pay.row}>
            <div className={pay.col}>
              <h3 className={pay.title}>billing address</h3>

              <div className={pay.inputBox}>
                <span>full name :</span>
                <input type="text" placeholder="name" />
              </div>
              <div className={pay.inputBox}>
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className={pay.inputBox}>
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className={pay.inputBox}>
                <span>city :</span>
                <input type="text" placeholder="city" />
              </div>

              <div className={pay.flex}>
                <div className={pay.inputBox}>
                  <span>state :</span>
                  <input type="text" placeholder="india" />
                </div>
                <div className={pay.inputBox}>
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            <div className={pay.col}>
              <h3 className={pay.title}>payment</h3>

              <div className={pay.inputBox}>
                <span>cards accepted :</span>
                <img src={atmImg} alt="" />
              </div>
              <div className={pay.inputBox}>
                <span>name on card :</span>
                <input type="text" placeholder="card name" />
              </div>
              <div className={pay.inputBox}>
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className={pay.inputBox}>
                <span>exp month :</span>
                <input type="text" placeholder="month" />
              </div>

              <div className={pay.flex}>
                <div className={pay.inputBox}>
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div className={pay.inputBox}>
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <input type="submit" value="proceed to checkout" className={pay.submitBtn}/>
          
        </form>
      </div>
    </div>
  );
}

export default Payment;
