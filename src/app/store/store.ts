import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../feature/auth/slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
