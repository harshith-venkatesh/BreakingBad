import React from 'react';
import './Spinner.css';

const Pagination = ({ itemsPerPage, items, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='nav-margin'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <div className='pagination-a'>
            <li key={number} style={{ listStyle: 'none' }}>
              <button
                className='pagination-btn'
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
