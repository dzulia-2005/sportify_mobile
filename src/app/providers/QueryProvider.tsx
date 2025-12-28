import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { queryClient } from '../../shared/lib/reactQuery/queryClient';
import { Props } from './QueryProvider.type';

const QueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
