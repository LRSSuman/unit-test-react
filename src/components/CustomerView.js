import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer } from '../slice/customerSlice';
import { UseDispatch } from 'react-redux';

export default function CustomerView() {
    const customers = useSelector(state => state.customers);

    const dispatch = useDispatch();

    function deleteHandler(index) {
        dispatch(deleteCustomer(index));
    }
    return (
        <div>
            <h3>customer list</h3>
            <ul style={{ listStyle: 'none' }}>
                {customers.map((customer, i) => (
                    <li key={i}>
                        {customer}
                        <button onClick={() => deleteHandler(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
