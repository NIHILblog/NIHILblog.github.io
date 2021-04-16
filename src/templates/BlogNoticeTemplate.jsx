import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogNoticeTemplate = ({ data, pageContext, }) => {
  const { frontmatter, body, slug, excerpt, } = data.mdx;
  const { prev, next, } = pageContext;

  const siteData = {
    pageName: frontmatter.title,
    pageDescription: excerpt,
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
          <div id='post-metadata'>
            <h2 id='content-title'><i className='fas fa-bell' /> {frontmatter.title}</h2>
            <div className='content-data'>
              <span className='item-name'><i className='far fa-clock' /> 작성 날짜</span>
              <time dateTime={frontmatter.createdAt}>{frontmatter.createString}</time>
            </div>
            <div className='content-data'>
              <span className='item-name'><i className='far fa-clock' /> 수정 날짜</span>
              <time dateTime={frontmatter.updatedAt}>{frontmatter.updateString}</time>
            </div>
          </div>
          <div id='post-content'>
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
  query NOTICE_SLUG($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        category
        createdAt
        createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        tag
        title
        updatedAt
        updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
      }
      slug
      body
      excerpt(pruneLength: 250, truncate: true)
    }
  }
`;

export default BlogNoticeTemplate;