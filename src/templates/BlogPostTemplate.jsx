import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import AppLayout from '@layouts/AppLayout';
import { Helmet } from 'react-helmet';

const BlogPostTemplate = ({ data, pageContext, }) => {
  const { frontmatter, body, slug, } = data.mdx;
  const { prev, next, } = pageContext;

  const siteData = {
    pageName: frontmatter.title,
    pageDescription: frontmatter.description,
    pageKeywords: frontmatter.tag.join(', '),
    pageUrl: `/${slug}`,
    pageType: 'article',
  };
  
  return (
    <>
      <Helmet>
        {/* 오픈그래프 포스트 최적화 */}
        <meta property='og:type' content='article' />
        <meta property='article:published_time' content={frontmatter.createdAt} />
        <meta property='article:modified_time' content={frontmatter.updatedAt} />
        <meta property='article:author' content='NIHILncunia' />
        <meta property='article:section' content={frontmatter.category} />
        <meta property='article:tag ' content={frontmatter.tag} />
      </Helmet>

      <AppLayout {...siteData}>
        <article id='blog-post-page'>
          <div id='post-content'>
            <h1 id='content-title'>{frontmatter.title}</h1>
            <div id='content-datetime'>
              <p className='time-item'>
                <span>작성 날짜</span>
                <time dateTime={frontmatter.createdAt}>{frontmatter.createString}</time>
              </p>
              <p className='time-item'>
                <span>수정 날짜</span>
                <time dateTime={frontmatter.updatedAt}>{frontmatter.updateString}</time>
              </p>
            </div>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </div>
          <div id='post-nav'>
            {prev === false ? null : (
              <>
                {prev && (
                  <p id='prev-post'>
                    <span className='navigation-name'>이전 포스트</span>
                    <span className='navigation-link-'><Link to={`/${prev.slug}`}>{prev.frontmatter.title}</Link></span>
                  </p>
                )}
              </>
            )}
            {next === false ? null : (
              <>
                {next && (
                  <p id='next-post'>
                    <span className='navigation-name'>다음 포스트</span>
                    <span className='navigation-link-'><Link to={`/${next.slug}`}>{next.frontmatter.title}</Link></span>
                  </p>
                )}
              </>
            )}
          </div>
        </article>
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
        createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        description
        tag
        title
        updatedAt
        updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
      }
      slug
      body
    }
  }
`;

export default BlogPostTemplate;