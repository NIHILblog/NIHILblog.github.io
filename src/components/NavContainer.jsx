import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const NavContainer = () => {
  const navStyle = css`
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 100px;
    background-color: #333333;
    padding: 10px;
    letter-spacing: -1px;
    
    & > span {
      & > a {
        transition: all 0.3s;
        box-sizing: border-box;
        display: inline-block;
        color: #ffffff;
        background-color: #333333;
        border: 2px solid #ffffff;
        border-radius: 20px;
        padding: 5px 10px;
        box-shadow: 0px 0px 10px -4px #ffffff;
        margin: 2px;

        &:hover {
          transition: all 0.3s;
          color: #333333;
          background-color: #ffffff;
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
          <Link to='/about/'><i className='fas fa-info-circle' /> 소개</Link>
        </span>
        <span id='link-notice-page'>
          <Link to='/notice/page/1#top'><i className='fas fa-bell' /> 공지</Link>
        </span>
        <span id='link-page'>
          <Link to='/page/1#top'><i className='fas fa-align-justify' /> 포스트</Link>
        </span>
        <span id='link-category'>
          <Link to='/categories/#top'><i className='fas fa-folder' /> 카테고리</Link>
        </span>
        <span id='link-tag'>
          <Link to='/tags/#top'><i className='fas fa-tags' /> 태그</Link>
        </span>
      </nav>
    </>
  );
};

export default NavContainer;