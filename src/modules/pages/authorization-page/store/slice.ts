import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { UserActionType, UserType } from '../../../../@types/UserType';

const initialState: UserActionType = {
  status: 'deactivated',
  user: {
    _id: '',
    name: '',
    surname: '',
    email: '',
    passwordHash: '',
    avatarURL: '',
    personalArticles: [],
    likedArticles: [],
    role: '',
    createdAt: '',
    updatedAt: '',
  },
};

const auth = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state: UserActionType, action: PayloadAction<UserType>) =>
      (state = { status: 'activated', user: action.payload }),
    removeUserData: (state: UserActionType) =>
      (state = {
        //eslint-disable-line no-unused-vars
        status: 'deactivated',
        user: {
          _id: '',
          name: '',
          surname: '',
          email: '',
          passwordHash: '',
          avatarURL: '',
          personalArticles: [],
          likedArticles: [],
          role: '',
          createdAt: '',
          updatedAt: '',
        },
      }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.LoginReducer,
      };
    },
  },
});

export const LoginReducer = auth.reducer;
export const { setUserData, removeUserData } = auth.actions;
