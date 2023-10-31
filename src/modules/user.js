import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    token: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { token, email } }) => {
      state.user.token = token;
      state.user.email = email;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export default userSlice;
export const { setUser, clearUser } = userSlice.actions;
