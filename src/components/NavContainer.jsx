import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const NavContainer = () => {
  const navStyle = css`
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 100px;
    
    & > span {
      & > a {
        transition: all 0.3s;
        box-sizing: border-box;
        display: inline-block;
        color: #333333;
        background-color: #ffffff;
        border-radius: 20px;
        padding: 5px 10px;
        box-shadow: 0px 0px 10px -4px #333333;
        margin: 2px;

        &:hover {
          transition: all 0.3s;
          color: #ffffff;
          background-color: #333333;
        }
      }
    }
  `;

  return (
    <>
      <nav id='blog-menu' css={navStyle}>
        <span id='link-home'>
          <Link to='/'><i className='fas fa-home' /> 홈</Link>
        </span>
        <span id='link-about'>
          <Link to='/about/'><i className='fas fa-info-circle' /> 블로그 소개</Link>
        </span>
        <span id='link-page'>
          <Link to='/page/1'><i className='fas fa-archive' /> 포스트 목록</Link>
        </span>
        <span id='link-category'>
          <Link to='/categories/'><i className='fas fa-folder-open' /> 카테고리</Link>
        </span>
        <span id='link-tag'>
          <Link to='/tags/'><i className='fas fa-tags' /> 태그</Link>
        </span>
      </nav>
    </>
  );
};

export default NavContainer;