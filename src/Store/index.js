import { createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import allReducers from '../Reducers/allReducers';

const allStoreEnhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers,
    {
        firstName: null,
        lastName: null,
        email: null,
        subject: null,
        message: null,
    },
    allStoreEnhancers,
);

export default store;