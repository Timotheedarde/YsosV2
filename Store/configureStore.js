// Store/configureStore.js

import { createStore } from 'redux';
import connectUser from './Reducers/userReducer'

export default createStore(connectUser)