import React, { FunctionComponent, useState, useContext } from 'react';

import { Paper, Typography, Tooltip, Modal, Box, useTheme } from '@mui/material';
import { Sledding, AcUnit, Park, Star } from '@mui/icons-material';

import CodeBlock from '../CodeBlockRenderer/CodeBlock';
import { HeatModeContext } from '../../context/HeatModeContext';

type AdventWindowProps = {
  day: number;
  isOpen: boolean;
  hasResult: boolean;
  resultContent?: string;
  codeSnippet?: string;
};

const AdventWindow: FunctionComponent<AdventWindowProps> = ({
  day,
  isOpen,
  hasResult,
  resultContent,
  codeSnippet,
}) => {
  const theme = useTheme();
  const { heatMode } = useContext(HeatModeContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (hasResult) setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleRedirect = () => {
    if (!hasResult && isOpen) {
      window.open(`https://adventofcode.com/2024/day/${day}`, '_blank');
    }
  };

  const icons = [<Sledding />, <AcUnit />, <Park />, <Star />];

  const randomIcons = heatMode
    ? Array.from({ length: 5 }).map((_, index) => {
        const randomIcon = icons[(day + index) % icons.length];
        const randomSize = `${Math.random() * 3 + 2}rem`;
        const randomRotation = `${Math.random() * 360}deg`;
        const randomTop = `${Math.random() * 100}%`;
        const randomLeft = `${Math.random() * 100}%`;

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: randomTop,
              left: randomLeft,
              transform: `rotate(${randomRotation})`,
              pointerEvents: 'none',
            }}
          >
            {React.cloneElement(randomIcon, {
              sx: {
                fontSize: randomSize,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            })}
          </Box>
        );
      })
    : null;

  return (
    <>
      <Tooltip title={!hasResult && isOpen ? 'Not done yet... click to see what it looks like!' : ''} arrow>
        <Paper
          elevation={2}
          onClick={hasResult ? handleOpenModal : handleRedirect}
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isOpen
              ? hasResult
                ? theme.palette.success.dark
                : '#8b0000'
              : theme.palette.grey[900],
            color: 'white',
            borderRadius: '8px',
            transition: 'background-color 0.3s, transform 0.2s',
            cursor: 'pointer',
            overflow: 'hidden',
            '&:hover': {
              transform: 'scale(1.02)',
              backgroundColor: isOpen
                ? hasResult
                  ? theme.palette.success.main
                  : '#a52a2a'
                : theme.palette.grey[800],
            },
          }}
        >
          <Typography variant="h6">{day}</Typography>
          {randomIcons}
        </Paper>
      </Tooltip>

      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            color: 'text.primary',
          }}
        >
          <Typography id="modal-title" variant="h5" mb={2}>
            🎉 Day {day} Results
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Result:
          </Typography>
          <Paper sx={{ p: 2, backgroundColor: theme.palette.grey[100] }}>
            <Typography variant="body1">{resultContent || 'No result provided'}</Typography>
          </Paper>

          <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
            Code:
          </Typography>
          <Box sx={{ overflow: 'auto', maxHeight: '300px' }}>
            <CodeBlock code={codeSnippet || '// No code available'} language="javascript" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AdventWindow;
