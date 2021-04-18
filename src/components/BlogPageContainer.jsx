import React from 'react';
import pageStyle from '@styles/PageStyle';
import BlogMessage from '@components/BlogMessage';
import BlogSeriesList from '@components/BlogSeriesList';

const BlogPageContainer = ({ children, }) => {
  return (
    <>
      <main id='blog-content' css={pageStyle}>
        <BlogMessage />
        <BlogSeriesList />
        { children }
      </main>
    </>
  );
};

export default BlogPageContainer;