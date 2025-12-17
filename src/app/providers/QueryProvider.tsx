import {  QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'
import { queryClient } from '../../shared/lib/reactQuery/queryClient';

type Props = {
    children:ReactNode;
}

const QueryProvider:React.FC<Props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider