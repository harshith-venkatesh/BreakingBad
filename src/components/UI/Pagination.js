import React from 'react';
import './Spinner.css';

const Pagination = ({ itemsPerPage, items, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav style={{ alignItems: 'center', margin: '0px 34%' }}>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <div className='pagination-a'>
            <li key={number} style={{ listStyle: 'none' }}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
