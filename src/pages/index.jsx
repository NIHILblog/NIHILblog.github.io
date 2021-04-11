import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';
import { getKST } from '@utils/getDate';

const siteData = {
  pageName: '홈',
  pageDescription: '연습용 블로그의 연습용 설명',
  pageKeywords: '블로그, 프로그래밍, blog, coding, programing',
};

const App = ({ data, }) => {
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-message'>
          <h1>최근에 작성된 포스트를 확인하세요!</h1>
          <p>계속해서 새로운 포스트가 작성됩니다.</p>
        </div>
        <div id='post-list'>
          {data.allMdx.nodes.map(({ excerpt, frontmatter, id, slug, }) => (
            <div className='list-item' key={id}>
              <Link to={slug}><h2 className='list-title'>{frontmatter.title}</h2></Link>
              <p className='list-time'>{getKST(frontmatter.createdAt)} (KST)</p>
              <p className='list-desc'>{excerpt}</p>
            </div>
          ))}
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
    ) {
      nodes {
        frontmatter {
          category
          createdAt
          description
          keywords
          tag
          title
          updatedAt
        }
        id
        slug
        excerpt(pruneLength: 250)
      }
    }
  }
`;

export default App;