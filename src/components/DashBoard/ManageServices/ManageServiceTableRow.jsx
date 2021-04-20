import React from 'react';

const ManageServiceTableRow = (props) => {
    const {title, imageURL, _id} = props.singleManage

    const handleDelete = (id) => {
        fetch(`https://fast-springs-42794.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Service Deleted SuccessFully!')
            }
        })
    }

    return (
        <tr>
            <td><img style={{width: '120px'}} src={imageURL} alt="" className="img-fluid"/></td>
            <td>{title}</td>
            <td><button onClick={()=>handleDelete(_id)} className="btn-danger text-white">Delete</button></td>
        </tr>
    );
};

export default ManageServiceTableRow;