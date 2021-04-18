import { MainImage } from '@components/PostComponents/MainImage';
import PostNavigation from '@components/PostNavigation';
import AppLayout from '@layouts/AppLayout';
import { graphql } from 'gatsby';
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
    pageUrl: `/blog/${slug}`,
    pageType: 'article',
    pageImage: frontmatter.image ? frontmatter.image.publicURL : '',
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
          <div id='top'></div>
          <div id='post-metadata'>
            <h2 id='content-title'><i className='fas fa-bell' /> {frontmatter.title}</h2>
            {
              frontmatter.image
                ? <MainImage src={frontmatter.image.publicURL} alt={frontmatter.title} />
                : ''
            }
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
        </article>
        <PostNavigation prev={prev} next={next} />
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
        image {
          publicURL
        }
      }
      slug
      body
      excerpt(pruneLength: 250, truncate: true)
    }
  }
`;

export default BlogNoticeTemplate;