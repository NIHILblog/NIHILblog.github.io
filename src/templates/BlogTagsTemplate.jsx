import React from 'react';
import AppLayout from '@layouts/AppLayout';
import { graphql, Link } from 'gatsby';

const siteData = {
  pageName: '태그',
  pageDescription: '태그 모아놓은 페이지',
  pageKeywords: '태그',
  pageUrl: '/tags',
  pageType: 'website',
};

const BlogTagsTemplate = ({ data, }) => {
  const { group, } = data.tags;
  
  return (
    <>
      <AppLayout {...siteData}>
        <div id='blog-tags-page'>
          <section id='items-preview'>
            <h2 id='item-list-name'>태그 목록</h2>
            <p id='item-list'>
              {group && group.map((tag, index) => (
                <span className='list-item' key={`${tag.fieldValue}${tag.totalCount}-${index}`}>
                  {tag.fieldValue} ({tag.totalCount}건)
                </span>
              ))}
            </p>
          </section>
          <section id='items-detail'>
            {group && group.map((tag, index) => (
              <div className='items-item' key={`${tag.fieldValue}-${index}`}>
                <h2 className='item-name'>{tag.fieldValue} ({tag.totalCount}건)</h2>
                <div className='item-posts'>
                  {tag.nodes.map((post) => (
                    <p className='tag-post' key={post.id}>
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
  query TAGS_QUERY {
    tags: allMdx(sort: {fields: frontmatter___createdAt, order: DESC}) {
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