import React from 'react';

const OrderListTableRow = (props) => {
    const {id,name,email,service,brand} = props.singleOrder
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{brand} card</td>
            <td>{id}</td>
            <td>
                <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Pending</option>
                        <option>On Going</option>
                        <option>Done</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default OrderListTableRow;