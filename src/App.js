import Header from './Header';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (  
    //BEM class naming convention 
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
          <Route path="/search/:searchTerm">
            <div className="app__page">
                <Sidebar />
                <SearchPage />
            </div>
          </Route>
          <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>
        </Switch>
      </Router>
      
      
      
   </div>     
  );
}

export default App;
