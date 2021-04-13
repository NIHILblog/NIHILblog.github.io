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

    & > #footer-copyright {
      margin-top: 5px;
      
      & > .small-text {
        color: #ffffff;
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
              <i className='fas fa-at' /> 이메일
            </a>
          </span>
          <span id='link-instagram'>
            <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noreferrer noopener'>
              <i className='fab fa-instagram' /> 인스타그램
            </a>
          </span>
        </div>
        <div id='footer-copyright'>
          <p className='small-text'>{ siteData.year }. NIHILncunia.</p>
        </div>
        
      </footer>
    </>
  );
};

export default FooterContainer;