import React, { useContext } from 'react';
import { GridContext } from '../context/GridContext';

function Row({ children }) {

  const {gap} = useContext(GridContext)


  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap, backgroundColor: 'blueviolet' }}>
      {children}
    </div>
  );
}

export default Row;
