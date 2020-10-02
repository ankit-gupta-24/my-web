import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/animation.css';
import Error404 from './components/Error404';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './static/css/App.css';
// import Loader from './Loader';

function App() {
  return (
    <>
    {/* <Loader/> */}
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/my-web/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Error404}/>
        </Switch>        
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
