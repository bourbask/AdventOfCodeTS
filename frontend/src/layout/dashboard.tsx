import React, {} from 'react';

import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

import HeatModeToggle from '../components/HeatModeToggle/HeatModeToggle';

export default function Layout() {
  return (
    <DashboardLayout slots={{
        toolbarActions: () => {
            return <HeatModeToggle displayIcon />
        }
    }} >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
