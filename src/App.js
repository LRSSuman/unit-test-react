import logo from './logo.svg';
import './App.css';
import CustomerAdd from './components/CustomerAdd';
import CustomerView from './components/CustomerView';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>react redux customer example</h1>
                <CustomerAdd />
                <CustomerView />
            </div>
        </Provider>
    );
}

export default App;
