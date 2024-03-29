import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
      return (
        <nav className ="header navbar navbar-expand-lg navbar-light bg-light">
            <div className ="container">
                <Link className ="navbar-brand" to="/">Vishnue</Link>
                <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>

                    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className ="menuul navbar-nav mr-auto">
                        <li className ="nav-item">
                            <Link className ="nav-link" to="/">Home</Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className ="nav-link" to="/Contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
      );
  }
}

export default Header;
