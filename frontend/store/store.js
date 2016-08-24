import {createStore} from 'redux';
import root from '../reducers/index';


const configureStore = () => {
      return createStore(root, {});
};

export default configureStore;
