import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/headercomponent/Header';
import Footer from './components/footercomponent/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Banner from './components/bannercomponent/Banner';
import './assets/css/style.css';

class App extends Component {

  render() {
    
      return (
        <Router>
          <div className ="App">
            <Header />
                <div className ="container">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/Contact" component={Contact} />
                </div>
            <Footer />
          </div>
        </Router>
      );
  }
}

export default App;
