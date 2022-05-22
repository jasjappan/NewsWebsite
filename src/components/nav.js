import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class nav extends Component {
  static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                 
 

                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#"><h3>NewsApp</h3></a>
                    </li>
                </ul>
            
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-dark me-2">
                    Login
                    </button>
                    <button type="button" className="btn btn-secondary me-3">
                        Link2
                    </button>
                    
                </div>
                </div>
            </div>
            
            </nav>
     )
  }
}

export default nav