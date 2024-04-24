import React, { createContext } from 'react';

export const GridContext = createContext(null);

export function GridProvider({ children, gap }) {
  return <GridContext.Provider value={{ gap }}>{children}</GridContext.Provider>;
}
