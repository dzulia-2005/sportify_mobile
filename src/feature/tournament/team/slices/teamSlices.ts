import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialType = {
  teamId: string | null;
};

const initialState: InitialType = {
  teamId: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeamId: (state, action: PayloadAction<string>) => {
      state.teamId = action.payload;
    },
  },
});

export const { setTeamId } = teamSlice.actions;
export default teamSlice.reducer;
