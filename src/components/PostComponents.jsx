import React from 'react';
import { css } from '@emotion/react';

export const H1 = ({ children, }) => {
  const style = css`
    font-weight: 500;
    color: #ffffff;
    background: #333333;
    padding: 5px 10px;
    border-radius: 10px;
    margin: 40px 0px;
    transition: all 0.3s;

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <h2 className='post-heading-2' css={style}>{children}</h2>
    </>
  );
};

export const H2 = ({ children, }) => {
  const style = css`
    margin: 40px 0px;
    font-weight: 500;
    color: #ffffff;
    background: #555555;
    padding: 5px 10px;
    border-radius: 10px;
    transition: all 0.3s;

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;

  return (
    <>
      <h3 className='post-heading-3' css={style}>{children}</h3>
    </>
  );
};

export const H3 = ({ children, }) => {
  const style = css`
    margin: 40px 0px;
    font-weight: 500;
    color: #ffffff;
    background: #777777;
    padding: 5px 10px;
    border-radius: 10px;
    transition: all 0.3s;

    & > span {
      font-size: 90%;
    }

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;
  return (
    <>
      <h4 className='post-heading-4' css={style}>
        <span>{children}</span>
      </h4>
    </>
  );
};

export const H4 = ({ children, }) => {
  const style = css`
    margin: 40px 0px;
    font-weight: 500;
    color: #777777;
    padding: 5px 10px;
    border: 2px solid #777777;
    border-radius: 10px;
    transition: all 0.3s;

    & > span {
      font-size: 80%;
    }

    &:before {
      content: '\\f27a';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
    }
  `;
  return (
    <>
      <h5 className='post-heading-5' css={style}>
        <span>{children}</span>
      </h5>
    </>
  );
};

export const P = ({ children, }) => {
  const style = css`
    text-align: justify;
    line-height: 1.8;
    margin: 20px 0px;
    text-indent: 10px;
    letter-spacing: -1px;
    color: #333333;
    font-weight: 500;
    transition: all 0.3s;
  `;
  return (
    <>
      <p className='post-paragraph' css={style}>{children}</p>
    </>
  );
};

export const Code = ({ children, }) => {
  const style = css`
    padding: 0px 5px;
    border-radius: 5px;
    font-weight: 600;
    text-indent: 0px;
    border: 2px solid #888888;
    color: #ffffff;
    font-size: 90%;
    background-color: #333333;
    margin: 0px 2px;
    transition: all 0.3s;

    &:before {
      content: '\\f121';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      margin-right: 5px;
      color: #888888;
    }
  `;

  return (
    <>
      <code css={style}>{children}</code>
    </>
  );
};

export const Image = ({ src, alt, }) => {
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
        <img src={src} alt={alt} />
        <figcaption><i className='fas fa-image' />{alt}</figcaption>
      </figure>
    </>
  );
};

export const A = ({ children, href, type = 'blog', }) => {
  const typeColor = {};
  const typeProps = {};
  const icon = {};

  if (type === 'blog') {
    typeColor.color = '#218cd8';
    typeProps.href = href;
    icon.code = 'f0c1';
    icon.type = 'Free';
  } else if (type === 'normal') {
    typeColor.color = '#11b32c';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f360';
    icon.type = 'Free';
  } else {
    typeColor.color = '#c30505';
    typeProps.href = href;
    typeProps.rel = 'noreferrer noopener';
    icon.code = 'f167';
    icon.type = 'Brands';
  }

  const style = css`
    border: 2px solid ${typeColor.color};
    color: ${typeColor.color};
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 90%;
    transition: all 0.3s;
    margin: 0px 2px;

    &:after {
      content: '\\${icon.code}';
      font-family: 'Font Awesome 5 ${icon.type}';
      font-weight: 900;
      margin-left: 5px;
    }

    &:hover {
      color: #ffffff;
      background-color: ${typeColor.color};
      transition: all 0.3s;
    }
  `;

  return (
    <>
      <a css={style} {...typeProps}>{children}</a>
    </>
  );
};

export const Strike = ({ children, }) => {
  const style = css`
    color: #999999;
    transition: all 0.3s;
  `;

  return (
    <>
      <s css={style}>{children}</s>
    </>
  );
};

export const Strong = ({ children, }) => {
  const style = css`
    font-weight: 900;
    color: #ff5b5b;
    transition: all 0.3s;
  `;

  return (
    <>
      <strong css={style}>{children}</strong>
    </>
  );
};

export const Q = ({ children, }) => {
  const style = css`
    padding: 0px 5px;
    background: #eeeeee;
    border: 2px solid #33333350;
    border-radius: 5px;
    color: #333333;
    font-size: 90%;
    margin: 0px 2px;
    transition: all 0.3s;

    & > .fa-quote-left,
    & > .fa-quote-right {
      text-indent: 0px;
    }

    &:before {
      content: '\\f10d';
      margin-right: 5px;
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
    }

    &:after {
      content: '\\f10e';
      margin-left: 5px;
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
    }
  `;

  return (
    <>
      <q css={style}>{children}</q>
    </>
  );
};

export const Message = ({ children, color, }) => {
  const colorType = {};

  if (color === 'red') {
    colorType.color = [ '#ff5b5b50', '#ff5b5b', '#ff5b5b50', ];
    colorType.icon = 'f057';
    colorType.word = '위험';
  } else if (color === 'blue') {
    colorType.color = [ '#3daeff50', '#0084e2', '#0084e250', ];
    colorType.icon = 'f059';
    colorType.word = '안내';
  } else if (color === 'yellow') {
    colorType.color = [ '#ff922c50', '#f37b0d', '#f37b0d50', ];
    colorType.icon = 'f06a';
    colorType.word = '주의';
  } else if (color === 'green') {
    colorType.color = [ '#11b32c50', '#05881b', '#05881b50', ];
    colorType.icon = 'f05a';
    colorType.word = '정보';
  }

  const style = css`
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0px;
    font-size: 90%;
    background: ${colorType.color[0]};
    color: ${colorType.color[1]};
    border: 2px solid ${colorType.color[2]};

    & > p:nth-of-type(1) {
      font-size: 130%;
      font-weight: 900;
      text-align: left;
      margin-bottom: 10px;
      transition: all 0.3s;
      letter-spacing: -1px;

      &:before {
        content: '\\${colorType.icon}';
        font-weight: 900;
        margin-right: 5px;
        font-family: 'Font Awesome 5 Free';
      }
    }

    & > p:nth-of-type(2) {
      font-weight: 500;
      text-align: justify;
      transition: all 0.3s;
      letter-spacing: -1px;
    }
  `;

  return (
    <>
      <div className={`Message-${color}`} css={style}>
        <p>{colorType.word}</p>
        <p>{children}</p>
      </div>
    </>
  );
};

export const Em = ({ children, }) => {
  const style = css`
    margin-right: 4px;
    transition: all 0.3s;
  `;
  return (
    <>
      <em css={style}>{children}</em>
    </>
  );
};

export const Ul = ({ children, }) => {
  return (
    <>
      <ul className='post-unordered-list'>{children}</ul>
    </>
  );
};

export const Ol = ({ children, }) => {
  return (
    <>
      <ol className='post-ordered-list'>{children}</ol>
    </>
  );
};