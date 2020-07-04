import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';

const CharacterGrid = ({ isloading, items }) => {
  return isloading ? (
    <div>
      <Spinner />
      <p>Loading...</p>
      <p style={{ color: 'white' }}>{isloading}</p>
    </div>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
