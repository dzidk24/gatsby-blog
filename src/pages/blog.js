import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {

   const data = useStaticQuery(graphql`
   query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC     
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do,YYYY")
            titleImage {
              title
              resize (width:715, height:415) {
                src
              }
            }
          }
        }
      }
    }`)


    return (
       <Layout>
         <Head title="Blog" />
         <h1>Blog</h1>
         <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge) => {
               return (
                  <li className={blogStyles.post}>
                     <Link to={`/blog/${edge.node.slug}`}>
                       <div>
                             <h2>{edge.node.title}</h2>
                             <p>{edge.node.publishedDate}</p>
                       </div>
                       <div className={blogStyles.postImage}><img src={edge.node.titleImage.resize.src} alt={edge.node.titleImage.title} /></div>
                     </Link>
                  </li>
               )
            }

            )}
         </ol>
       </Layout>
    )
 }

 export default BlogPage