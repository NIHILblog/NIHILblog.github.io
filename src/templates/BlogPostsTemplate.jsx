import React from 'react';
import { graphql, Link } from 'gatsby';
import AppLayout from '@layouts/AppLayout';
import Paginator from '@components/Paginator';

const BlogPostsTemplate = ({ data, pageContext, }) => {
  const { currentPage, numPages, } = pageContext;
  const props = {
    currentPage,
    numPages,
    type: 'post',
  };

  const siteData = {
    pageName: `포스트 목록 (${currentPage} 페이지)`,
    pageUrl: `/blog/page/${currentPage}`,
    pageType: 'website',
  };

  return (
    <>
      <AppLayout {...siteData}>
        <div id='post-list-page'>
          <section className='Paginator'>
            <Paginator {...props} />
          </section>
          <section id='blog-post-list'>
            {data.allMdx.nodes.map((post) => (
              <div className='list-item' key={post.id}>
                <h3 className='list-title'>
                  <Link to={`/${post.slug}`}><i className='fas fa-comment-alt' /> {post.frontmatter.title}</Link>
                </h3>
                <div className='list-content'>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-align-justify' /> 미리보기</span>
                    <br />
                    <span className='list-description'>{post.excerpt}</span>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='far fa-clock' /> 작성 날짜</span>
                    <time className='info-time' dateTime={post.frontmatter.createdAt}>
                      {post.frontmatter.createString}
                    </time>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-folder-open' /> 카테고리</span>
                    {post.frontmatter.category.map((item, index) => (
                      <Link to={`/categories/${item}`} className='info-category' key={`${item}-${index}`}>
                        <i className='fas fa-folder-open' /> {item}
                      </Link>
                    ))}
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-tags' /> 태그</span>
                    {post.frontmatter.tag.map((item, index) => (
                      <Link to={`/tags/${item}`} className='info-tag' key={`${item}-${index}`}>
                        <i className='fas fa-tag' /> {item}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <section className='Paginator'>
            <Paginator {...props} />
          </section>
        </div>
      </AppLayout>
    </>
  );
};

export const query = graphql`
  query POST_PAGES_QUERY($skip: Int! = 0) {
    allMdx(
      sort: {fields: frontmatter___createdAt, order: DESC}
      limit: 5
      skip: $skip
      filter: {frontmatter: {display: {eq: true}, notice: {nin: true}}}
    ) {
      totalCount
      nodes {
        slug
        id
        excerpt(truncate: true, pruneLength: 250)
        frontmatter {
          createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          createdAt
          updatedAt
          category
          tag
          title
        }
      }
    }
  }
`;

export default BlogPostsTemplate;