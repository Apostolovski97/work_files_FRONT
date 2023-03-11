import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { footer } = this.props;
    return (
      <div className="footer">
        <div className="container footer-container">
          <div className="apps-box">
            <p className="title">{footer.titleA}</p>
            <Link to={"/google-app"} className="icon-box">
              <img className="icon-app" src={footer.logoG} alt="" />
            </Link>
            <Link to={"/apple-app"} className="icon-box">
              <svg className="icon-app">
                <use href={footer.logoA}></use>
              </svg>
            </Link>
          </div>
          <div className="about-box">
            <p className="title">{footer.titleT}</p>
            <p className="about-text">{footer.textA}</p>
            <p className="about-text">{footer.textB}</p>
            <p className="about-text">{footer.textC}</p>
            <p className="about-text">{footer.textD}</p>
          </div>
          <div className="links-box">
            <div className="links">
              {footer.links.map((link) => (
                <Link key={link._id} className="link">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="copyright-box">
            <Link
              href="https://www.begambleaware.org/"
              rel="noopener"
              target="_blank"
              className="copyright-text"
            >
              {footer.aware}
            </Link>
            <p className="copyright-text">{footer.copyright}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
