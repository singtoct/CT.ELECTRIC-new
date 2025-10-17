// FIX: Imported React to resolve the 'Cannot find namespace React' error for React.ReactNode type.
import React from 'react';

export interface Stat {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ReactNode;
}

export interface DailyQuantity {
  name: string;
  quantity: number;
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
  status?: 'Open' | 'Completed' | 'Cancelled' | 'Pending';
  quantityDelivered?: number;
}

export interface DashboardData {
    stats: Stat[];
    salesData: DailyQuantity[];
    orders: PackingOrder[];
}