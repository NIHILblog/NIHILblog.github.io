import React from 'react';
import { graphql } from 'gatsby';
import AppLayout from '@layouts/AppLayout';
import Paginator from '@components/Paginator';

const BlogPostsTemplate = ({ data, pageContext, }) => {
  const { currentPage, numPages, } = pageContext;
  const props = {
    currentPage,
    numPages,
  };

  const siteData = {
    pageName: `포스트 목록 (${currentPage} 페이지)`,
    pageDescription: '포스트를 쭉 모아서 봅시다.',
    pageKeywords: '포스트, 목록',
    pageUrl: `/page/${currentPage}`,
    pageType: 'website',
  };

  return (
    <>
      <AppLayout {...siteData}>
        <div id='post-list-page'>
          <section className='Paginator'>
            <Paginator {...props} />
          </section>
          <section id='post-list'>
            {data.allMdx.nodes.map((post) => (
              <div key={post.id}>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.excerpt}</p>
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
    ) {
      totalCount
      nodes {
        slug
        id
        excerpt(truncate: true)
        frontmatter {
          createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          updateString: updatedAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          createdAt
          updatedAt
          category
          tag
          title
          description
        }
      }
    }
  }
`;

export default BlogPostsTemplate;