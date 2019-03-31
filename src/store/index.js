import { createStore } from 'redux'
import counter from '../Components/modules/App/redux/reducers'

export const store = createStore(counter);
