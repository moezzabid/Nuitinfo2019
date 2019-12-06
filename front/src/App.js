import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Accueil from './components/pageComponent/accueil'
import Coaching from './components/pageComponent/coaching'
import Signin from './components/pageComponent/signin'
import Signup from './components/pageComponent/signup'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      <Switch>

       <Route exact path='/' component={Accueil} />
       <Route exact path='/coatching' component={Coaching} />
       <Route exact path='/sign_up' component={Signup} />
       <Route exact path='/sign_in' component={Signin} />

       <Route exact render={()=><h4>bad url</h4>}/>


</Switch>
    </div>
    </Router>
  );
}

export default App;
