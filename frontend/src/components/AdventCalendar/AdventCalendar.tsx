import React, { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import AdventWindow from '../AdventWindow/AdventWindow';

type AdventCalendarProps = {
  results: { [key: number]: boolean };
};

const AdventCalendar: FunctionComponent<AdventCalendarProps> = ({ results }) => {

    const gridLayout = [
    { day: 5, colSpan: 3, rowSpan: 3 },
    { day: 4, colSpan: 2, rowSpan: 4 },
    { day: 1, colSpan: 3, rowSpan: 4 },
    { day: 8, colSpan: 3, rowSpan: 2 },
    { day: 6, colSpan: 1, rowSpan: 4 },
    { day: 9, colSpan: 3, rowSpan: 2 },
    { day: 10, colSpan: 2, rowSpan: 1 },
    { day: 13, colSpan: 1, rowSpan: 1 },
    { day: 12, colSpan: 2, rowSpan: 2 },
    { day: 14, colSpan: 2, rowSpan: 1 },
    { day: 24, colSpan: 4, rowSpan: 4 }, // Largest and centered
    { day: 16, colSpan: 1, rowSpan: 3 },
    { day: 11, colSpan: 3, rowSpan: 3 },
    { day: 15, colSpan: 2, rowSpan: 1 },
    { day: 7, colSpan: 4, rowSpan: 1 },
    { day: 17, colSpan: 2, rowSpan: 2 },
    { day: 18, colSpan: 2, rowSpan: 4 },
    { day: 19, colSpan: 2, rowSpan: 2 },
    { day: 2, colSpan: 2, rowSpan: 2 },
    { day: 3, colSpan: 2, rowSpan: 3 },
    { day: 20, colSpan: 2, rowSpan: 3 },
    { day: 21, colSpan: 2, rowSpan: 2 },
    { day: 22, colSpan: 2, rowSpan: 2 },
    { day: 23, colSpan: 2, rowSpan: 2 },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridAutoRows: '60px',
        gap: 1,
        width: '100%',
        height: '100vh',
      }}
    >
      {gridLayout.map((item) => {
        const isOpen = item.day <= new Date().getDate();
        const hasResult = results[item.day] || false;

        return (
          <Box
            key={item.day}
            sx={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
          >
            <AdventWindow
                day={item.day}
                isOpen={isOpen}
                hasResult={hasResult}
                resultContent={`Result for day ${item.day}`}
                codeSnippet={`console.log('Hello Day ${item.day}');`}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default AdventCalendar;
