import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { Video } from './components/Weather/index.weather';
import { Search } from './components/Search/index.search';

function App() {
  return (

    <Provider store={store}>
      <h1 className="app__title">¿ Hows Weather today ?</h1>
      <Search />
      <Video />
    </Provider>
  );
}

export default App;
