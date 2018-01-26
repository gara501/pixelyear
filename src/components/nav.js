import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";
import logo from "../images/logos4f.png";
import { rhythm } from "../utils/typography";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'nav-list hide',
      submenu: 'hide',
      openIcon: 'angle-down'
    } 
  }

  showMenu() {
    this.setState({menu: this.state.menu === 'nav-list visible' 
        ? 'nav-list hide': 'nav-list visible'});
  }
  
  showSubmenu(e) {
    this.setState({submenu: this.state.submenu === 'visible' 
        ? 'hide': 'visible'});
    
    this.setState({openIcon: this.state.openIcon === 'angle-down' 
        ? 'angle-left': 'angle-down'});
  }

  render() {
    const isVisible = this.state.menu;
    const isVisibleSubmenu = this.state.submenu;
    const openIcon = this.state.openIcon;

    return (
      <header>
      <Link to="/" className="site-link">
        <img src={logo} alt="logo"/>
      </Link>
      <div className="desktop-nav">
        <ul className="nav-list">
          <li>
            <Link to={`/`}>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to={`/reto90/`}>
              <span>Herramientas</span>
            </Link>
          </li>
          <li className="nav-sub">
          <Link to={`/#/`}>
            <span>Entrenamientos</span>
          </Link>
          <ul>
            <li>
              <Link to={`/`}>
                <span>Reto Warrior Body</span>
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <span>Reto Sin Pareo</span>
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                <span>Reto 90</span>
              </Link>
            </li>
          </ul>
        </li>
          <li>
            <Link to={`/about/`}>
              <span>Nosotros</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <a href="#" className="hamb" onClick={(e) => this.showMenu(e)} >
          <FontAwesomeIcon icon="bars"/>
        </a>
        <div className="mobile-nav-wrapper">
          <ul className={isVisible}>
            <li>
              <Link to={`/`}>
                <span>Inicio</span>
              </Link>
            </li>
            <li className="nav-sub">
              <a href="#" onClick={(e) => this.showSubmenu(e)} >
                <span>Workouts</span>
                <FontAwesomeIcon icon={openIcon} />
              </a>
              <ul className={isVisibleSubmenu}>
                <li>
                  <Link to={`/`}>
                    <span>Reto Warrior Body</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <span>Reto Sin Pareo</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <span>Reto 90</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/reto90/`}>
                <span>Herramientas</span>
              </Link>
            </li>
            <li>
              <Link to={`/about/`}>
                <span>Nosotros</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );
  }
};

export default Nav;