import React from 'react';
import { Link } from 'gatsby';

const Paginator = ({ currentPage, numPages, }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;

  return (
    <>
      {
        !isFirst
          ? (
            <Link to={prevPage} className='page-link' rel='prev'>
              <i className='fas fa-arrow-circle-left' />
            </Link>
          )
          : <i className='fas fa-arrow-circle-left' />
      }
      {
        Array.from({ length: numPages, }, (_, index) => (
          <Link key={`pagination-number${index + 1}`} className='page-link' to={`/page/${index === 0 ? '' : index + 1}`}>
            {index + 1}
          </Link>
        ))
      }
      {
        !isLast
          ? (
            <Link to={nextPage} className='page-link' rel='next'>
              <i className='fas fa-arrow-circle-right' />
            </Link>
          )
          : <i className='fas fa-arrow-circle-right' />
      }
    </>
  );
};

export default Paginator;