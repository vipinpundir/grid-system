import React, { createContext } from 'react';

export const GridContext = createContext(null);

export function GridProvider({ children, gapRow, gapColumn }) {
  return <GridContext.Provider value={{ gapRow, gapColumn }}>{children}</GridContext.Provider>;
}
