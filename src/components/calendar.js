import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";
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

  render() {
    return (
      <div className="calendar">
        alksjdalkjdklajsdkljasd
      </div>
    );
  }
};

export default Nav;