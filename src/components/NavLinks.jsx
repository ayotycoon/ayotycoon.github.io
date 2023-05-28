import React, { Component } from 'react'

export default class NavLinks extends Component {
    render() {
        return (
            <span>
            <span
                scrollto="/contact"
                className="nav-item mr-2 ml-2 cursor"
                activeclass="text-primary"
            >
              contact
            </span>

            <span onClick={this.props.toggleMode} className="mr-2 ml-2 cursor">
              {this.props.mode === "dark" ? (
                  <i className="fa fa-sun"></i>
              ) : (
                  <i className="fa fa-moon"></i>
              )}
            </span>
          </span>
        );
    }
}
