import React from 'react';

export interface Stat {
  title: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export interface ProductionData {
  name: string;
  produced: number;
  waste: number;
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
