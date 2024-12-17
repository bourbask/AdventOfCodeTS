import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AppProvider } from '@toolpad/core/react-router-dom';
import type { Navigation } from '@toolpad/core';
import theme from '../theme';

import { HeatModeProvider } from './context/HeatModeContext';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

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

  const colors: {[x: number]: string} = useMemo(() => {
    return {
      0: 'yellow',
      1: 'orange',
      2: 'red',
      3: 'pink',
      4: 'purple',
      5: 'blue',
      6: 'cyan',
      7: 'green',
      8: 'lime',
    }
  }, []);

  const [colorId, setColorId] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setColorId(colorId + 1);
    }, 100)
  }, [colorId]);

  const colorDisplay = useMemo(() => {
    return colors[colorId];
  }, [colorId, colors]);

  const BRANDING = {
    title: 'AdventOfCode',
    logo: <FontAwesomeIcon
      icon={faTerminal}
      color={colorDisplay}
    />,
  };

  return (
    <HeatModeProvider>
      <AppProvider theme={theme} navigation={NAVIGATION} branding={BRANDING}>
        <Outlet />
      </AppProvider>
    </HeatModeProvider>
  );
};

export default App;
