import React, { useContext } from 'react';
import { GridContext } from '../context/GridContext';


const Grid = ({ children }) => {
  const { gapColumn } = useContext(GridContext);

  return (
    <div className="grid" style={{ display: 'flex', flexDirection: 'column', gap: gapColumn }}>
      {children}
    </div>
  );
}

export default Grid;
