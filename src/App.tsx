import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ProductionSchedulePage from './pages/ProductionSchedulePage';
import ReportsPage from './pages/ReportsPage';
import ProductManagementPage from './pages/ProductManagementPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        {/* Placeholder routes for other pages to ensure they adopt the new theme */}
        <Route path="/production-schedule" element={<ProductionSchedulePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/products" element={<ProductManagementPage />} />
      </Route>
    </Routes>
  );
};

export default App;