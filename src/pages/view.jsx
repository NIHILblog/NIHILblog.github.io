import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';

const ViewPage = ({ data, }) => {
  const { totalCount, nodes, } = data.allMdx;

  const style = css`
    & > a {
      margin-bottom: 50px;
    }

    & .list-item {
      margin: 10px 0px;
      padding: 5px;
      border: 1px solid #333333;

      & > p {
        margin: 0px;
        padding: 0px;

        &.bold {
          font-weight: 900;
          margin-bottom: 5px;
        }

        & > span {
          margin-right: 10px;
          background-color: #333333;
          padding: 0px 5px;
          color: #ffffff;
          display: inline-block;
          margin-bottom: 5px;

          &.red {
            background-color: #ff0000;
          }
        }
      }
    }
  `;

  return (
    <>
      <div css={style}>
        <Link to='/'>홈</Link>
        <h1>총 {totalCount}개의 포스트</h1>
        <ol reversed>
          {nodes.map((post, index) => (
            <li className='list-item' key={index}>
              <p className='bold'>
                {
                  post.frontmatter.notice === true
                    ? <span className='red'>공지 포스트</span>
                    : <span>일반 포스트</span>
                }
                <br />
                {post.frontmatter.title}
              </p>
              <p>{post.slug}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export const query = graphql`
  query ALL_POST_LIST_VIEW_QUERY {
    allMdx(sort: {fields: frontmatter___createdAt, order: DESC}) {
      totalCount
      nodes {
        slug
        frontmatter {
          title
          notice
        }
      }
    }
  }
`;

export default ViewPage;