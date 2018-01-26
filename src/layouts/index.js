import React from "react";
import g from "glamorous";
import { css } from "glamor";

import styles from "../styles/main.scss";
import Calendar from "../components/calendar";

import { rhythm } from "../utils/typography";

export default ({ children, data }) => 
<div className="general-container" style={{ margin: `0 auto`, maxWidth: '100%', padding: `0` }}>
  <Calendar></Calendar>
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