import React from 'react';
import { css, Global } from '@emotion/react';
import size from '@data/size';
import { Strong, A, Gray } from '@components/PostComponents';

const BlogSeriesList = ({ top = 30, bottom = 100, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px -4px #333333;
    transition: all 0.3s;

    & > h2 {
      background-color: #333333;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #ffffff;
      font-weight: 500;
      letter-spacing: -1px;
      transition: all 0.3s;

      &:before {
        margin-right: 10px;
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        content: '\\f15c';
      }
    }

    & > p {
      letter-spacing: -1px;
      text-align: justify;
      color: #333333;
      font-weight: 500;
      transition: all 0.3s;
      text-indent: 10px;
    }

    & > details {
      transition: all 0.3s;
      font-weight: 500;
      letter-spacing: -1px;
      color: #333333;
      margin-top: 20px;

      & > summary {
        transition: all 0.3s;
        outline: none;
        cursor: pointer;
        border: 2px solid #555555;
        border-radius: 10px;
        padding: 10px;
        color: #cccccc;
        background-color: #555555;
        user-select: none;

        &:hover {
          color: #ffffff;
          background-color: #333333;
        }

        &:before {
          content: '\\f152';
          margin-right: 10px;
          font-weight: 900;
          font-family: 'Font Awesome 5 Free';
        }
        
        &::-webkit-details-marker {
          display: none;
        }
      }

      & > .series-list {
        border: 2px solid #333333;
        border-top: none;
        border-radius: 0px 0px 10px 10px;
        padding: 10px;
        background-color: #33333320;
      }
    }

    & > details[open] {
      & > summary {
        border-radius: 10px 10px 0px 0px;
        transition: all 0.3s;
        border-color: #333333;
        background-color: #333333;
        color: #ffffff;

        &:before {
          content: '\\f150';
          margin-right: 10px;
          font-weight: 900;
          font-family: 'Font Awesome 5 Free';
        }
      }
    }
  `;

  const fontSize = css`
    @media (min-width: 1px) and (max-width: 600px) {
      #blog-series-list h2 {font-size: ${size[4]};}
      
      #blog-series-list summary,
      #blog-series-list p {font-size: ${size[1]};}
    }

    @media (min-width: 601px) and (max-width: 800px) {
      #blog-series-list h2 {font-size: ${size[5]};}

      #blog-series-list summary,
      #blog-series-list p {font-size: ${size[2]};}
    }

    @media (min-width: 801px) {
      #blog-series-list h2 {font-size: ${size[6]};}

      #blog-series-list summary,
      #blog-series-list p {font-size: ${size[3]};}
    }
  `;

  return (
    <>
      <Global styles={fontSize} />
      <div id='blog-series-list' css={style}>
        <h2>시리즈 리스트</h2>
        <p>이 블로그는 컨셉상 가이드가 많습니다. 그 가이드들은 시리즈물로 작성됩니다. 하나의 가이드를 작성하기 시작하면 그 가이드의 시리즈 포스트들을 순서대로 확인할 수 있게끔 링크를 모아놓은 포스트를 작성합니다. 아래에는 그 정리된 포스트들을 나열합니다. <Strong>시리즈 확인하기</Strong>를 클릭하면 각 가이드의 정리 포스트 링크가 보입니다. <Gray>(익스플로러에선 어떻게 보일 지 모릅니다.)</Gray></p>

        {/* 가이드 시리즈 */}
        <details>
          <summary>가이드 시리즈 확인하기</summary>
          <div className='series-list'>
            <p>아직 시리즈가 없습니다.</p>
          </div>
        </details>

        {/* 리뷰 시리즈 */}
        <details>
          <summary>리뷰 시리즈 확인하기</summary>
          <div className='series-list'>
            <p>아직 시리즈가 없습니다.</p>
          </div>
        </details>

        {/* 게임 플레이 시리즈 */}
        <details>
          <summary>게임 플레이 시리즈 확인하기</summary>
          <div className='series-list'>
            <p>아직 시리즈가 없습니다.</p>
          </div>
        </details>
      </div>
    </>
  );
};

export default BlogSeriesList;