import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';

const siteData = {
  pageName: '홈',
  pageUrl: '/blog/',
  pageType: 'website',
};

const App = ({ data, }) => {
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-index-page'>
          <section id='blog-post-list'>
            <div id='total-posts'>
              <h2><i className='far fa-clock' /> 최근 5건의 포스트</h2>
              <p>가장 최근에 작성된 포스트를 구경해보세요. 흥미로운 사실을 발견할지도 모릅니다.</p>
            </div>
            {data.allMdx.nodes.map(({ frontmatter, id, slug, excerpt, }) => (
              <div className='list-item' key={id}>
                <h3 className='list-title'>
                  <Link to={`/${slug}#top`}><i className='fas fa-comment-alt' /> {frontmatter.title}</Link>
                </h3>
                <div className='list-content'>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-align-justify' /> 미리보기</span>
                    <br />
                    <span className='list-description'>{excerpt}</span>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='far fa-clock' /> 작성 날짜</span>
                    <time className='info-time' dateTime={frontmatter.createdAt}>
                      {frontmatter.createString}
                    </time>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-folder-open' /> 카테고리</span>
                    {frontmatter.category.map((item, index) => (
                      <Link to={`/categories/${item}#top`} className='info-category' key={`${item}-${index}`}>
                        <i className='fas fa-folder-open' /> {item}
                      </Link>
                    ))}
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-tags' /> 태그</span>
                    {frontmatter.tag.map((item, index) => (
                      <Link to={`/tags/${item}#top`} className='info-tag' key={`${item}-${index}`}>
                        <i className='fas fa-tag' /> {item}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <div id='more-posts'>
              <Link to='/page/1'><i className='fas fa-archive' /> 포스트 목록으로</Link>
            </div>
          </section>
        </div>
      </AppLayout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: {fields: frontmatter___createdAt, order: DESC}
      filter: {frontmatter: {notice: {nin: true},display: {eq: true}}}
      limit: 5
    ) {
      nodes {
        frontmatter {
          category
          createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          createdAt
          tag
          title
          updatedAt
        }
        id
        slug
        excerpt(truncate: true, pruneLength: 250)
      }
      totalCount
    }
  }
`;

export default App;