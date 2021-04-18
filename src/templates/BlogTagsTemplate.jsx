import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';

const siteData = {
  pageName: '태그 목록',
  pageUrl: '/blog/tags',
  pageType: 'website',
};

const BlogTagsTemplate = ({ data, }) => {
  const { group, } = data.tags;
  
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-tags-page'>
          <div id='top'></div>
          <section id='items-preview'>
            <div id='item-list-name'>
              <h2>태그 목록</h2>
              <p>포스트에 사용된 태그 목록입니다. 각 태그에는 링크가 걸려있고 어떤 포스트가 어떤 태그를 사용했는지 확인 할 수 있습니다. 숫자는 사용된 포스트의 수를 의미합니다.</p>
            </div>
            <p id='item-list'>
              {group && group.map((tag, index) => (
                <Link to={`/tags/${tag.fieldValue}#top`} className='list-item' key={index}>
                  <i className='fas fa-tag' /> {tag.fieldValue} ({tag.totalCount}건)
                </Link>
              ))}
            </p>
          </section>
        </div>
      </AppLayout>
    </>
  );
};

export const query = graphql`
  query TAGS_QUERY {
    tags: allMdx(
      sort: {fields: frontmatter___createdAt, order: DESC}
      filter: {frontmatter: {display: {eq: true}}}
    ) {
      group(field: frontmatter___tag) {
        fieldValue
        totalCount
        nodes {
          slug
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default BlogTagsTemplate;