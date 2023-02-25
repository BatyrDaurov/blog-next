import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import axios from 'axios';
import { NextRouter } from 'next/router';
import { setCookie } from 'nookies';
import { FieldValues, UseFormReset } from 'react-hook-form';
import { UserType } from '../../../@types';

export const OnSubmitRegistration =
  (reset: UseFormReset<FieldValues>, router: NextRouter, dispatch: any, setUserData: ActionCreatorWithPayload<UserType, "login/setUserData">) =>
    async (fields: any) => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}registration`,
          fields
        );
        setCookie(null, 'authToken', data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });

        dispatch(setUserData(data._doc));
        router.push('/');
      } catch (error) {
        alert('Email was taken(');
        console.warn(error);
      }

      reset();
    };
