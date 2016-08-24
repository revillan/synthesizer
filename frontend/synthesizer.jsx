import React from 'react';
import ReactDOM from 'react-dom';
import Note from '../frontend/util/note';
import configureStore from '../frontend/store/store';
import Root from '../frontend/components/root';


document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});


let store = window.store;
