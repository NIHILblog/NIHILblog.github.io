import React from 'react';
import { Link } from 'gatsby';

const numList = [
  -4, -3, -2, -1, 0, 1, 2, 3, 4,
];

const Paginator = ({ currentPage, numPages, type, }) => {
  let Path;

  if (type === 'notice') {
    Path = '/notice/page/';
  } else {
    Path = '/page/';
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `${Path}1` : `${Path}${(currentPage - 1).toString()}`;
  const nextPage = `${Path}${(currentPage + 1).toString()}`;

  const numberArray = Array.from({ length: numPages, }, (_, index) => index + 1);

  return (
    <>
      {
        !isFirst
          ? <Link to={`${Path}1`} className='page-link' rel='prev'><i className='fas fa-angle-double-left' /></Link>
          : <span><i className='fas fa-angle-double-left false' /></span>
      }
      {
        !isFirst
          ? <Link to={`${prevPage}`} className='page-link' rel='prev'><i className='fas fa-angle-left' /></Link>
          : <span><i className='fas fa-angle-left false' /></span>
      }
      {
        numList.map((number) => (
          numberArray.includes(currentPage + number) && (
            <Link
              key={`${Path}${currentPage + number}`}
              className='page-link link-num'
              to={`${Path}${currentPage + number}`}
            >
              {currentPage + number}
            </Link>
          )
        ))
      }
      {
        !isLast
          ? <Link to={`${nextPage}`} className='page-link' rel='next'><i className='fas fa-angle-right' /></Link>
          : <span><i className='fas fa-angle-right false' /></span>
      }
      {
        !isLast
          ? <Link to={`${Path}${numPages}`} className='page-link' rel='next'><i className='fas fa-angle-double-right' /></Link>
          : <span><i className='fas fa-angle-double-right false' /></span>
      }
    </>
  );
};

export default Paginator;