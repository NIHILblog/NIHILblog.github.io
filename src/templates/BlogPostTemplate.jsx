import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import AppLayout from '@layouts/AppLayout';
import { Helmet } from 'react-helmet';
import PostNavigation from '@components/PostNavigation';
import { Message, MainImage } from '@components/PostComponents';
import { Disqus } from 'gatsby-plugin-disqus';
import { useSiteMetaDataQuery } from '@hooks/useSiteMetaDataQuery';

const BlogPostTemplate = ({ data, pageContext, }) => {
  const { frontmatter, body, slug, excerpt, } = data.mdx;
  const { prev, next, } = pageContext;
  const { url, } = useSiteMetaDataQuery();

  const siteData = {
    pageName: frontmatter.title,
    pageDescription: excerpt,
    pageKeywords: frontmatter.tag.join(', '),
    pageUrl: `/blog/${slug}`,
    pageType: 'article',
    pageImage: frontmatter.coverImage ? frontmatter.coverImage : '',
  };

  const disqusConfig = {
    url: `${url}/blog/${slug}`,
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
            <h2 id='content-title'><i className='fas fa-comment-alt' /> {frontmatter.title}</h2>
            {
              frontmatter.coverImage
                ? <MainImage src={frontmatter.coverImage} alt={frontmatter.title} />
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
            <p className='content-data'>
              <span className='item-name'><i className='fas fa-folder-open' /> 카테고리</span>
              <span className='item-items-list'>
                {frontmatter.category.map((item, index) => (
                  <Link to={`/categories/${item}`} className='list-item' key={index}>
                    <i className='fas fa-folder-open' /> {item}
                  </Link>
                ))}
              </span>
            </p>
            <p className='content-data'>
              <span className='item-name'><i className='fas fa-tags' /> 태그</span>
              <span className='item-items-list'>
                {frontmatter.tag.map((item, index) => (
                  <Link to={`/tags/${item}`} className='list-item' key={index}>
                    <i className='fas fa-tag' /> {item}
                  </Link>
                ))}
              </span>
            </p>
          </div>
          <hr />
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
  query SLUG($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        category
        createdAt
        createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        tag
        title
        updatedAt
        updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        coverImage
      }
      slug
      body
      excerpt(pruneLength: 250, truncate: true)
    }
  }
`;

export default BlogPostTemplate;