import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { OrderSummary } from './OrderSummary.jsx';
import { CheckoutHeader } from './CheckoutHeader.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const loadOptions = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);
        };

        loadOptions();

    }, [])
    useEffect(() => {
        const loadOptions = async () => {
            const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        };

        loadOptions();

    }, [cart])

    if(cart.length===0) return (<>
        <title>Checkout</title>
        <CheckoutHeader cart={cart}/>
        <div className="checkout-page">
            <div className="page-title">Please Add Items to the Cart  
                <Link className="return-to-home-link"
                    to="/">
                    : Home
                </Link>
            </div>
        </div>
    </>);
    return(
        <>
            <title>Checkout</title>
            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} cart={cart} loadCart={loadCart}/>

                </div>
            </div>
        </>
    );
}