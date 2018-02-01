import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"
import Calendar from "../components/calendar";

export default ({ data }) => {
  return (
    <div>
      <h1>Mood Calendar</h1>
      <Calendar></Calendar>
    </div>
  )
}

export const query = graphql`
  query IndexesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`