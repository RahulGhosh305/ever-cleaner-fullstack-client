import React, { useEffect, useState } from 'react';
import OrderListTableRow from './OrderListTableRow';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    useEffect( ()=> {
        fetch('http://localhost:5000/getOrder')
        .then(res => res.json())
        .then(data => setOrderList(data))
    },[])

    return (
        <div>
            <h3 class="card-title">Order List</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay with</th>
                        <th scope="col">Payment Id</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(singleOrder => <OrderListTableRow singleOrder={singleOrder}></OrderListTableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;