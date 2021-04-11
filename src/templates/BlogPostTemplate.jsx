import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import AppLayout from '@layouts/AppLayout';
import { getKST } from '@utils/getDate';
import { Helmet } from 'react-helmet';

const BlogPostTemplate = ({ data, }) => {
  const { frontmatter, body, } = data.mdx;

  const siteData = {
    pageName: frontmatter.title,
    pageDescription: frontmatter.description,
    pageKeywords: frontmatter.keywords,
  };
  
  return (
    <>
      <AppLayout {...siteData}>
        <h1>{frontmatter.title}</h1>
        <p>작성일: {getKST(frontmatter.createdAt)}</p>
        <p>수정일: {getKST(frontmatter.updatedAt)}</p>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </AppLayout>
    </>
  );
};

export const query = graphql`
  query SLUG($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        category
        createdAt
        description
        keywords
        tag
        title
        updatedAt
      }
      slug
      body
    }
  }
`;

export default BlogPostTemplate;