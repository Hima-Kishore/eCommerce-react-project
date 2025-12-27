import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header }  from '../../components/Header.jsx';
import { OrdersGrid } from './OrdersGrid.jsx';
import './OrdersPage.css'

export function OrdersPage({cart}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        };

        loadOrders();
    }, []);

    return (
        <>
            <title>Orders</title>

            <Header cart={cart}/>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
            </div>
        </>
    )
}