import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button'
import { handleSumTotal } from '../Utils/index'
import '../style/components/Payment.css';

const Payment = ({history}) =>{
    const { state, addNewOrder } = useContext(AppContext)
    const { cart } = state;
    const { buyer } = state

    const paypalOptions = {
        clientId : 'AbIG6Ixf2cN0p2TkhCalkJSQczhtVE9d3ls6rikDnpiYAF2al6EROmwgFkMD4jJ99FKwB_aofGgfx41q',
        intent: 'capture',
        currency : 'USD',
    }

    const buttonStyles = {
        layout : 'vertical',
        shape:'rect'
    }

    const handlePaymentSuccess = (data) => {
        console.log(data)
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer : buyer,
                payment: data
            }

            addNewOrder(newOrder);
            history.pus('/checkout/success')
        }
    }
    

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resume del pedido</h3>
                { cart.map((item)=>(
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $ {' '} {item.price} 
                            </span>
                        </div>
                    </div>
                ))

                }
                <div className="Payment-button">
                <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
                </div>
            </div>
        </div>
    )
}


export default Payment