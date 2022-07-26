import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { Video } from './components/Video/index.video';

function App() {
  return (
    <>
      <h1>HolaxxxTTT</h1>
      <Provider store={store}>
        <Video />
      </Provider>
    </>
  );
}

export default App;
