import Paginator from '@components/Paginator';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';
import React from 'react';

const BlogNoticeListTemplate = ({ data, pageContext, }) => {
  const { currentPage, numPages, } = pageContext;
  const props = {
    currentPage,
    numPages,
    type: 'notice',
  };

  const siteData = {
    pageName: `공지 목록 (${currentPage} 페이지)`,
    pageUrl: `/notice/page/${currentPage}`,
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
                  <Link to={`/${post.slug}`}><i className='fas fa-bell' /> {post.frontmatter.title}</Link>
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
  query NOTICE_LIST_QUERY($skip: Int! = 0) {
    allMdx(
      filter: {frontmatter: {notice: {in: true, nin: false}, display: {eq: true}}}
      sort: {fields: frontmatter___createdAt, order: DESC}
      limit: 5
      skip: $skip
    ) {
      totalCount
      nodes {
        id
        slug
        excerpt(pruneLength: 250, truncate: true)
        frontmatter {
          createdAt
          createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          title
          updatedAt
          updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        }
      }
    }
  }
`;

export default BlogNoticeListTemplate;