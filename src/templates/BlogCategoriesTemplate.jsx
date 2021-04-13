import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';

const siteData = {
  pageName: '카테고리',
  pageDescription: '카테고리 모아놓은 페이지',
  pageKeywords: '카테고리',
  pageUrl: '/categories',
  pageType: 'website',
};

const BlogCategoriesTemplate = ({ data, }) => {
  const { group, } = data.categories;
  
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-categories-page'>
          <section id='items-preview'>
            <h2 id='item-list-name'>카테고리 목록</h2>
            <p id='item-list'>
              {group && group.map((category, index) => (
                <span className='list-item' key={`${category.fieldValue}${category.totalCount}-${index}`}>
                  {category.fieldValue} ({category.totalCount}건)
                </span>
              ))}
            </p>
          </section>
          <section id='items-detail'>
            {group && group.map((category, index) => (
              <div className='items-item' key={`${category.fieldValue}-${index}`}>
                <h2 className='item-name'>{category.fieldValue} ({category.totalCount}건)</h2>
                <div className='item-posts'>
                  {category.nodes.map((post) => (
                    <p className='item-post' key={post.id}>
                      <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </AppLayout>
    </>
  );
};

export const query = graphql`
  query CATEGORIES_QUERY {
    categories: allMdx(sort: {fields: frontmatter___createdAt, order: DESC}) {
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