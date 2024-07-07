import React, { useState } from 'react';
import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from '../slice/customerSlice';
import { UseDispatch, useDispatch } from 'react-redux';

export default function CustomerAdd() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);
    function addCustomer() {
        if (input) {
            // setCustomers((prev) => {
            // return [...prev, input];
            // });
            dispatch(addCustomerAction(input));
            setInput('');
        }
    }
    return (
        <>
            <div>
                <h3>Add new Customer</h3>
                <input
                    type='text'
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    value={input}
                />
                <button onClick={addCustomer}>Add</button>
            </div>
        </>
    );
}
