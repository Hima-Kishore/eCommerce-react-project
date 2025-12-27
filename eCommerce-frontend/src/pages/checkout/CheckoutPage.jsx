import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary.jsx';
import { CheckoutHeader } from './CheckoutHeader.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import './CheckoutPage.css';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const loadOptions = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        };

        loadOptions();

    }, [])


    return(
        <>
            <title>Checkout</title>
            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>

                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    );
}