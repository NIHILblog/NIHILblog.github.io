import { Link } from 'gatsby';
import React from 'react';

const PostNavigation = ({ prev, next, }) => {
  return (
    <>
      <div id='post-navigation'>
        {
          prev === null
            ? (
              <p className='nav-button'>
                <span>이전 포스트가 없습니다.</span>
              </p>
            )
            : (prev && (
              <p className='nav-button'>
                <Link className='nav-link' to={`/${prev.slug}`}>{prev.frontmatter.title}</Link>
              </p>
            ))
        }
        {
          next === null
            ? (
              <p className='nav-button'>
                <span>다음 포스트가 없습니다.</span>
              </p>
            )
            : (next && (
              <p className='nav-button'>
                <Link className='nav-link' to={`/${next.slug}`}>{next.frontmatter.title}</Link>
              </p>
            ))
        }
      </div>
    </>
  );
};

export default PostNavigation;