import React from 'react';
import siteData from '@data/siteData';
import { css } from '@emotion/react';

const FooterContainer = () => {
  const FooterStyle = css`
    background-color: #333333;
    box-shadow: 0px 0px 10px -4px #333333;
    padding: 10px;
    text-align: center;
    margin-top: 100px;
    box-sizing: border-box;
    letter-spacing: -1px;

    & > #footer-copyright {
      margin-top: 5px;
      
      & > .small-text {
        color: #ffffff;
        font-weight: 500;
        transition: all 0.3s;
      }
    }

    & > #footer-link > span {
      & > a {
        transition: all 0.3s;
        box-sizing: border-box;
        display: inline-block;
        color: #ffffff;
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
      <footer id='blog-footer' css={FooterStyle}>
        <div id='footer-link'>
          <span id='link-email'>
            <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noreferrer noopener'>
              <i className='fas fa-envelope' />
            </a>
          </span>
          <span id='link-instagram'>
            <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-instagram' />
            </a>
          </span>
          <span id='link-github'>
            <a href='https://github.com/NIHILncunia' target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-github' />
            </a>
          </span>
        </div>
        <div id='footer-copyright'>
          <p className='small-text'><i className='fas fa-copyright' /> { siteData.year }. NIHILncunia.</p>
        </div>
      </footer>
    </>
  );
};

export default FooterContainer;