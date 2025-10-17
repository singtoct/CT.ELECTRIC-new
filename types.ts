// FIX: Imported React to resolve the 'Cannot find namespace React' error for React.ReactNode type.
import React from 'react';

export interface Stat {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
}

export interface SalesData {
  name: string;
  revenue: number;
  profit: number;
}

export interface PackingOrder {
  id: string;
  customerId?: string;
  name: string;
  quantity: number;
  color: string;
  stock?: number;
  dueDate: string;
  salePrice: number;
  lotNumber?: string;
  // FIX: Added 'Pending' to the status type to match its usage in RecentOrdersTable.tsx and resolve the type error.
  status?: 'Open' | 'Completed' | 'Cancelled' | 'Pending';
  quantityDelivered?: number;
}

export interface DashboardData {
    stats: Stat[];
    salesData: SalesData[];
    orders: PackingOrder[];
}