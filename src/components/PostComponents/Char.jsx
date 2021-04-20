import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@data/size';

export const Char = ({ children, who = '이름', top = 40, bottom = 40, file = '기본', }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    padding: 10px;
    border: 2px solid #33333350;
    transition: all 0.3s;
    border-radius: 10px;
    background-color: #eeeeee;
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    font-weight: 500;

    & > .script-left {
      margin-right: 10px;
      display: flex;
      align-items: flex-start;

      & > img {
        border-radius: 10px;
        display: block;
        border: 2px solid #333333;
        transition: all 0.3s;
      }
    }

    & > .script-right {
      color: #333333;

      & > .who {
        margin-bottom: 5px;
        font-weight: 900;
        transition: all 0.3s;

        & > span {
          font-size: 120%;
        }

        &:before {
          content: '\\f007';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          margin-right: 5px;
        }
      }

      & > .script {
        transition: all 0.3s;

        &:before {
          content: '\\f10d';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          margin-right: 10px;
        }

        &:after {
          content: '\\f10e';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          margin-left: 10px;
        }
      }
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      .post-character-script img {width: 40px;}
      .post-character-script blockquote,
      .post-character-script p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      .post-character-script img {width: 60px;}
      .post-character-script blockquote,
      .post-character-script p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      .post-character-script img {width: 80px;}
      .post-character-script blockquote,
      .post-character-script p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      <div className='post-character-script' css={style}>
        <div className='script-left'>
          {
            process.env.NODE_ENV === 'development'
              ? <img src={`/images/Characters/${file}.png`} alt={who} />
              : <img src={`/blog/images/Characters/${file}.png`} alt={who} />
          }
        </div>
        <div className='script-right'>
          <p className='who'>
            <span>{who}</span>
          </p>
          <blockquote className='script'>{children}</blockquote>
        </div>
      </div>
    </>
  );
};