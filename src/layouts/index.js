import React from "react";
import g from "glamorous";
import { css } from "glamor";

import styles from "../styles/main.scss";

import { rhythm } from "../utils/typography";

export default ({ children, data }) => 
<div className="general-container">
  
  {children()}
</div>
  export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `