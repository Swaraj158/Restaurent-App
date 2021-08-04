import './App.css';
import Header from './Header';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import HomeScreen from './HomeScreen';
import FeedBack from './Feedback';
import Categories from './Categories';
import SeaFood from './SeaFood';
import Order from './Order';
import DisplayCategory from './DisplayCategory';
import SetPrice from './SetPrice';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
              <Route exact path='/' component={HomeScreen} />
              <Route path='/categories' component={Categories} />
              <Route path='/order' component={Order} />
              <Route path='/feedback' component={FeedBack} />
              <Route path='/seafood' component={SeaFood} />
              <Route path='/displayCategory' component={DisplayCategory}/>
              <Route path='/setPrice' component={SetPrice}/>
      </Switch>
      {/* <HomeScreen/>
      <Categories/>
      <SeaFood/>
      <Order/>
      <FeedBack/> */}
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
