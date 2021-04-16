import React from 'react';
import { useSiteMetaDataQuery } from '@hooks/useSiteMetaDataQuery';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Logo from '@images/blog-logo.svg';
import siteData from '@data/siteData';

const HeaderContainer = () => {
  const { title, } = useSiteMetaDataQuery();

  const headerStyle = css`
    padding: 10px;
    background-color: #333333;
    color: #ffffff;
    text-align: justify;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px -4px #333333;
    border-bottom: 2px dotted #ffffff50;
    
    & #blog-logo {
      width: 250px;
      display: block;
      margin: 0px auto;
    }
    & > .small-text {
      text-align: center;
      font-weight: 500;
      transition: all 0.3s;
    }
  `;

  return (
    <>
      <header id='blog-header' css={headerStyle}>
        <Link to='/'>
          <h1><img id='blog-logo' src={Logo} alt={`${title} 로고`} /></h1>
        </Link>
        <p className='small-text'>ver.{siteData.version}</p>
      </header>
    </>
  );
};

export default HeaderContainer;