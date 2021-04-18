import React from 'react';
import { Link } from 'gatsby';

const PostNavigation = ({ prev, next, }) => {
  return (
    <>
      <div id='post-navigation'>
        {
          prev === null
            ? (
              <p className='nav-button'>
                <span className='message'><span>이전 포스트</span>이전 포스트가 없습니다.</span>
              </p>
            )
            : (prev && (
              <p className='nav-button'>
                <Link className='nav-link' to={`/${prev.slug}`}><span>이전 포스트</span>{prev.frontmatter.title}</Link>
              </p>
            ))
        }
        {
          next === null
            ? (
              <p className='nav-button'>
                <span className='message'>다음 포스트가 없습니다.<span>다음 포스트</span></span>
              </p>
            )
            : (next && (
              <p className='nav-button'>
                <Link className='nav-link' to={`/${next.slug}`}>{next.frontmatter.title}<span>다음 포스트</span></Link>
              </p>
            ))
        }
      </div>
    </>
  );
};

export default PostNavigation;