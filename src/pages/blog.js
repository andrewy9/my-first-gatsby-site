import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  console.log()
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage