import { MainImage, Message } from '@components/PostComponents';
import PostNavigation from '@components/PostNavigation';
import { useSiteMetaDataQuery } from '@hooks/useSiteMetaDataQuery';
import AppLayout from '@layouts/AppLayout';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogNoticeTemplate = ({ data, pageContext, }) => {
  const { frontmatter, body, slug, excerpt, } = data.mdx;
  const { prev, next, } = pageContext;
  const { url, } = useSiteMetaDataQuery();

  const siteData = {
    pageName: frontmatter.title,
    pageDescription: excerpt,
    pageKeywords: frontmatter.tag.join(', '),
    pageUrl: `/blog/notice/${slug}`,
    pageType: 'article',
    pageImage: frontmatter.image ? frontmatter.image.publicURL : '',
  };

  const disqusConfig = {
    url: `${url}/blog/notice/${slug}`,
    identifier: slug,
    title: frontmatter.title,
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
            <Message color='blue' bottom='0'>
              포스트를 읽고 궁금한 점이나 이해가 안가는 점, 그리고 문의 사항이 있을 경우엔 블로그 하단의 연락책을 이용하거나 아래에 덧글을 입력해주시면 빠르게 확인하고 답변 드리겠습니다. 이 포스트를 보신 모든 분들의 하루가 좋은 하루이길 바랍니다.
            </Message>
            <div id='content-comment'>
              <Disqus config={disqusConfig} />
            </div>
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