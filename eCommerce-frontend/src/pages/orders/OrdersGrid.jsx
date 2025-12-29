import dayjs from 'dayjs';
import { OrdersGridHeader } from './OrdersGridHeader.jsx';
import { OrdersGridDetails } from './OrdersGridDetails.jsx';

export function OrdersGrid({ orders }) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                console.log(order);
                return (
                    <div key={order.id} className="order-container">
                        
                        <OrdersGridHeader order={order} dayjs={dayjs} />

                        <OrdersGridDetails order={order} dayjs={dayjs} />
                    </div>
                );
            })}
        </div>
    );
}