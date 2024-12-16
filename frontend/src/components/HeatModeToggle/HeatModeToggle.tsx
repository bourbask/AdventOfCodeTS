import React, { FunctionComponent, useContext } from 'react';

import { Switch, Box, Typography } from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';

import { HeatModeContext } from '../../context/HeatModeContext';

type HeatModeToggleProps = {
  displayIcon?: boolean
}

const HeatModeToggle: FunctionComponent<HeatModeToggleProps> = ({displayIcon}) => {
  const { heatMode, toggleHeatMode } = useContext(HeatModeContext);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {displayIcon ? <AvTimerIcon /> : undefined }
      <Typography variant="body1">Heat Mode</Typography>
      <Switch checked={heatMode} onChange={toggleHeatMode} />
    </Box>
  );
};

export default HeatModeToggle;
