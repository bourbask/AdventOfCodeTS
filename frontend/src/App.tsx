import React, { FunctionComponent } from 'react';

import { Outlet } from 'react-router-dom';
import { DeveloperBoard } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AppProvider } from '@toolpad/core/react-router-dom';
import type { Navigation } from '@toolpad/core';

import { HeatModeProvider } from './context/HeatModeContext';
import { keyframes } from '@emotion/react';

const App: FunctionComponent = () => {
  const NAVIGATION: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      segment: 'aoc',
      title: 'Advent Calendar',
      icon: <CalendarMonthIcon />,
    },
    {
      segment: 'stats',
      title: 'Stats',
      icon: <ShoppingCartIcon />,
    },
  ];

  const rainbowKeyframes = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  `;

  const BRANDING = {
    title: 'AdventOfCode',
    logo: <DeveloperBoard
      sx={{
        fontSize: '2rem', // Adjust size as needed
        animation: `${rainbowKeyframes} 2s linear infinite`, // Rainbow animation
      }}
    />,
  };

  return (
    <HeatModeProvider>
      <AppProvider navigation={NAVIGATION} branding={BRANDING}>
        <Outlet />
      </AppProvider>
    </HeatModeProvider>
  );
};

export default App;
