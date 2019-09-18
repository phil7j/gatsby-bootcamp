import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>All of our posts:</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(item => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${item.node.fields.slug}`}>
                <h2>{item.node.frontmatter.title}</h2>
                <p>{item.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
