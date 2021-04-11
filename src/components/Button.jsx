import React from 'react';
import { css } from '@emotion/react';

const Button = () => {
  const style = css`
    background-color: #ff0000;
    color: #ffffff;
    padding: 5px 10px;
    border: none;
    text-align: center;
    border-radius: 10px;
  `;

  return (
    <>
      <button css={style}>클릭</button>
    </>
  );
};

export default Button;