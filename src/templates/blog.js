import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
// --------Query Markdown files for data------
// export const query = graphql``
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
//

//
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

function Blog(props) {
  // ---- Render blog post from Markdown file ------
  // return (
  //   <Layout>
  //     <h1>{props.data.markdownRemark.frontmatter.title}</h1>
  //     <p>{props.data.markdownRemark.frontmatter.date}</p>
  //     <div
  //       dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
  //     ></div>
  //   </Layout>
  // )

  // ---- Render Blog Post from Contentful CMS Data -----
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
