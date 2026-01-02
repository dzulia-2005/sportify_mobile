import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../../feature/auth/slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.dispatch>;
export type appDispatch = typeof store.dispatch;
