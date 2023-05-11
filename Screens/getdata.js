import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  return (
    <DataContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </DataContext.Provider>
  );
};
