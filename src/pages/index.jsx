import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';
import { indexPageStyle } from '@styles/PageStyle';

const siteData = {
  pageName: '홈',
  pageDescription: '프로그래밍과 일본어, 그리고 게임 관련된 컨텐츠를 다루는 블로그입니다. 자유롭게 손보고 싶어서 GatsbyJS로 구축했고 앞서 언급한 주제들 말고도 더욱 다양한 주제를 다뤄볼 예정입니다.',
  pageKeywords: '블로그, 프로그래밍, blog, coding, programing',
  pageUrl: '/',
  pageType: 'website',
};

const App = ({ data, }) => {
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-index-page' css={indexPageStyle}>
          <section id='blog-message'>
            <h2>니힐 블로그에 오신 것을 환영합니다!</h2>
            <div>
              <p className='message-line'>{siteData.pageDescription}</p>
            </div>
          </section>
          <section id='blog-post-list'>
            <div id='total-posts'>
              <h2>최근 5건의 포스트</h2>
              <p>가장 최근에 작성된 포스트를 구경해보세요. 흥미로운 사실을 발견할지도 모릅니다.</p>
            </div>
            {data.allMdx.nodes.map(({ frontmatter, id, slug, excerpt, }) => (
              <div className='list-item' key={id}>
                <h3 className='list-title'>
                  <Link to={slug}><i className='fas fa-angle-right' /> {frontmatter.title}</Link>
                </h3>
                <div className='list-content'>
                  <p className='content-info'>
                    <span className='info-name'><i className='far fa-clock' /> 작성 날짜</span>
                    <time className='info-time' dateTime={frontmatter.createdAt}>
                      {frontmatter.createString}
                    </time>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-align-justify' /> 미리보기</span>
                    <span className='list-description'>{excerpt}</span>
                  </p>
                  <p className='content-info'>
                    <span className='info-name'><i className='fas fa-folder-open' /> 카테고리</span>
                    {frontmatter.category.map((item, index) => (
                      <span className='info-category' key={`${item}-${index}`}>{item}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <div id='more-posts'>
              <Link to='/page/1'><i className='fas fa-archive' /> 포스트 목록</Link>
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
      filter: {frontmatter: {display: {eq: true}}}
      limit: 5
    ) {
      nodes {
        frontmatter {
          category
          createString: createdAt(formatString: "YYYY년 MM월 DD일 HH시 mm분")
          createdAt
          description
          tag
          title
          updatedAt
        }
        id
        slug
        excerpt(truncate: true)
      }
      totalCount
    }
  }
`;

export default App;