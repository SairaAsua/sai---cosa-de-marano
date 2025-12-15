import React from 'react';

export interface Role {
  title: string;
  count: string;
  description: string[];
  currentPerson?: string; // If null, it's a vacancy/hire
  isHire: boolean;
}

export interface Cell {
  id: string;
  name: string;
  objective: string;
  icon: React.ElementType;
  roles: Role[];
}

export interface InfraItem {
  title: string;
  details: string[];
}

export interface StrategyPoint {
  title: string;
  description: string;
}