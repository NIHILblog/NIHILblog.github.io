import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';

const siteData = {
  pageName: '카테고리 목록',
  pageUrl: '/blog/categories',
  pageType: 'website',
};

const BlogCategoriesTemplate = ({ data, }) => {
  const { group, } = data.categories;
  
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-categories-page'>
          <div id='top'></div>
          <section id='items-preview'>
            <div id='item-list-name'>
              <h2>카테고리 목록</h2>
              <p>포스트에 사용된 카테고리 목록입니다. 각 카테고리에는 링크가 되어있고 어떤 카테고리에 어떤 포스트들이 들어있는지 확인 할 수 있습니다. 숫자는 사용된 포스트의 수를 의미합니다.</p>
            </div>
            <p id='item-list'>
              {group && group.map((category, index) => (
                <Link to={`/categories/${category.fieldValue}#top`} className='list-item' key={index}>
                  <i className='fas fa-folder-open' /> {category.fieldValue} ({category.totalCount}건)
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
  query CATEGORIES_QUERY {
    categories: allMdx(
      sort: {fields: frontmatter___createdAt, order: DESC}
      filter: {frontmatter: {display: {eq: true}}}
    ) {
      group(field: frontmatter___category) {
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

export default BlogCategoriesTemplate;