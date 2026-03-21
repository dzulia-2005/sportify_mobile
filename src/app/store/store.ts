import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../feature/auth/slices/authSlice';
import TeamReducer from '../../feature/tournament/team/slices/teamSlices';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    team: TeamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
