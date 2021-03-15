import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

import bloggStyles from './blogg.module.scss'

export const query = graphql`
query (
    $slug: String!
  ) {
    contentfulBlogPost (slug:{eq:$slug}){
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
          json
      }
    } 
  }`


const Blog = (props) => {
 console.log(props)


    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1 className={bloggStyles.title}>{props.data.contentfulBlogPost.title}</h1>
            <p className={bloggStyles.title}>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
        </Layout>
    )
}


export default Blog