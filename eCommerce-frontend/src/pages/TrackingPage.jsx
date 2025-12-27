import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header.jsx';
import './TrackingPage.css'

export function TrackingPage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const loadOrders = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            if(isMounted) {
                setOrder(response.data);
            }
        };

        loadOrders();

        return () => { isMounted = false; };
    }, [orderId]);
    
    if(!order) return null;

    // const products = order?.products || [];

    const productDetails = order.products.find((productDetails) => {
        return productDetails.productId === productId;
    })
console.log(order);

    return (
        <>
            <title>Tracking</title>

            <Header cart={cart}/>

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on Monday, June 13
                    </div>

                    <div className="product-info">
                        name
                    </div>

                    <div className="product-info">
                        Quantity: 1
                    </div>

                    <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}