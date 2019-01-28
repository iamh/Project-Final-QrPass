// Dependencies
import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small bg-dark pt-4">

        <div className="container d-none d-lg-block">
          <ul className="list-unstyled list-inline text-center">

            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="/">
                <i className="fa fa-facebook"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1" href="/">
                <i className="fa fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1" href="/">
                <i className="fa fa-google-plus"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-instagram mx-1" href="/">
                <i className="fa fa-instagram"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="/">
                <i className="fa fa-linkedin"> </i>
              </a>
            </li>

          </ul>
        </div>

        <div className="footer-copyright text-center py-3 text-white">© 2018 Copyright:
          <a href="/"> QrPass.com</a>
        </div>

      </footer>
    );
  }
}

export default Footer;