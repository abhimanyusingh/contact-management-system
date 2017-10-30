
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetContacts } from './actions/contacts';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';


const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetContacts()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
