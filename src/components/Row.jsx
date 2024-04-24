import React, { useContext } from 'react';
import { GridContext } from '../context/GridContext';

function Row({ children }) {

  const {gapRow} = useContext(GridContext)


  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: gapRow, backgroundColor: 'blueviolet' }}>
      {children}
    </div>
  );
}

export default Row;
