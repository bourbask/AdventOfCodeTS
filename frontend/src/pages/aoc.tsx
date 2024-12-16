import React, {} from 'react';

import AdventCalendar from '../components/AdventCalendar/AdventCalendar';

export default function AdventPage() {
  const results = {
    1: true,
    2: true,
  };

  return <AdventCalendar
    results={results}
  />;
}
