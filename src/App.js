import React from 'react';
import './App.css';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
