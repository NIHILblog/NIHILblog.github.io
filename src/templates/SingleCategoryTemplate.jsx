import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';
import React from 'react';

const SingleTagTemplate = ({ data, pageContext, }) => {
  const { edges, totalCount, } = data.allMdx;

  const siteData = {
    pageName: `"${pageContext.category}" 관련 포스트 ${totalCount}건`,
    pageUrl: `/blog/categories/${pageContext.category}`,
    pageType: 'website',
  };

  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-category-page'>
          <section id='category-post-count'>
            <h2>&ldquo;{pageContext.category}&rdquo; 관련 포스트 {totalCount}건</h2>
            <p>다른 카테고리를 보려면 상단의 메뉴에서 카테고리 버튼을 클릭하세요.</p>
          </section>
          <section id='category-post-list'>
            {edges.map((post) => (
              <div className='list-item' key={post.node.id}>
                <h3 className='list-title'>
                  <Link to={`/${post.node.slug}`}><i className='fas fa-comment-alt' /> {post.node.frontmatter.title}</Link>
                </h3>
                <div className='list-content'>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-align-justify' /> 미리보기</span>
                    <br />
                    <span className='list-description'>{post.node.excerpt}</span>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='far fa-clock' /> 작성 날짜</span>
                    <time className='info-time' dateTime={post.node.frontmatter.createdAt}>
                      {post.node.frontmatter.createString}
                    </time>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-folder-open' /> 카테고리</span>
                    {post.node.frontmatter.category.map((item, index) => (
                      <Link to={`/categories/${item}`} className='info-category' key={`${item}-${index}`}>
                        <i className='fas fa-folder-open' /> {item}
                      </Link>
                    ))}
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-tags' /> 태그</span>
                    {post.node.frontmatter.tag.map((item, index) => (
                      <Link to={`/tags/${item}`} className='info-tag' key={`${item}-${index}`}>
                        <i className='fas fa-tag' /> {item}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </AppLayout>
    </>
  );
};

export const CategoryQuery = graphql`
  query CATEGORY_QUERY($category: String) {
    allMdx(
      filter: {frontmatter: {notice: {nin: true}, display: {eq: true}, category: {in: [$category]}}}
      sort: {fields: frontmatter___createdAt, order: DESC}
    ) {
      edges {
        node {
          id
          slug
          excerpt(pruneLength: 250, truncate: true)
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
      totalCount
    }
  }
`;

export default SingleTagTemplate;