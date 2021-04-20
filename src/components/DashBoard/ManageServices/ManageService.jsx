import React, { useEffect, useState } from 'react';
import ManageServiceTableRow from './ManageServiceTableRow';

const ManageService = () => {
    const [manageService, setManageService] = useState([])
    useEffect( () => {
        fetch('https://fast-springs-42794.herokuapp.com/getManageService/')
        .then(res => res.json())
        .then(data => setManageService(data))
    },[])

    return (
        <div>
            <h3 class="card-title">Manage Services</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageService.map(singleManage => <ManageServiceTableRow singleManage={singleManage}></ManageServiceTableRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;