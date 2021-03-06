import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <ul>
        <li>Email: phil7j@protonmail.com</li>
        <li>
          <a href="https://github.com/phil7j">Github: phil7j</a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
