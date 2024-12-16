import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.tsx'
import Layout from './layout/dashboard.tsx';
import DashboardPage from './pages/index.tsx';
import StatsPage from './pages/stats.tsx';
import AdventPage from './pages/aoc.tsx';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'aoc',
            Component: AdventPage,
          },
          {
            path: 'stats',
            Component: StatsPage,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
