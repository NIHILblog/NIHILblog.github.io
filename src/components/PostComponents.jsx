import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PostH1 = styled.h2`
  font-size: 1.5em;
  margin: 30px 0px;
`;

export const PostP = styled.p`
  text-align: justify;
  line-height: 1.8;
  margin: 20px 0px;
  text-indent: 15px;
  letter-spacing: -1px;
`;

export const PostInlineCode = styled.code`
  background-color: #333333;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
`;

export const PostImage = props => {
  const style = css`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0px;
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;

    & > img {
      width: inherit;
      border-radius: 10px;
      display: block;
    }

    & > figcaption {
      margin-top: 5px;
      text-align: center;
      font-size: small;
      font-style: italic;
      color: #ffffff;
    }
  `;

  return (
    <>
      <figure css={style}>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.alt}</figcaption>
      </figure>
    </>
  );
};