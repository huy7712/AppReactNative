import React, { createContext, useState } from 'react';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(''); // Note: Changed variable name to lowercase 'mode'
  const [mode2, setMode2] = useState(''); // Note: Changed variable name to lowercase 'mode'

  return (
    <ModeContext.Provider value={{ mode, setMode ,mode2,setMode2}}> 
      {children}
    </ModeContext.Provider>
  );
};

