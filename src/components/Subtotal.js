import React from 'react'
import CurrencyFormat from "react-currency-format";

import '../css/Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    {/* Part of the homework */}
                    {/* Subtotal ({basket.length} items): <strong>{value}</strong> */}
                    Subtotal (0 items): <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)} // Part of the homework
                value={0} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            {/* <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> */}
            <button >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
