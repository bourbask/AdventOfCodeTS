import React, { createContext, useState, FunctionComponent } from 'react';

import { ToggleButtonProps } from '@mui/material';

export const HeatModeContext = createContext({
  heatMode: false,
  toggleHeatMode: () => {},
});

type HeatModeContextProps = {
    children: ToggleButtonProps['children'],
};

export const HeatModeProvider: FunctionComponent<HeatModeContextProps> = ({ children }) => {
  const [heatMode, setHeatMode] = useState(false);

  const toggleHeatMode = () => setHeatMode((prev) => !prev);

  return (
    <HeatModeContext.Provider value={{ heatMode, toggleHeatMode }}>
      {children}
    </HeatModeContext.Provider>
  );
};
