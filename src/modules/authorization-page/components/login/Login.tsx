import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCustomDispatch } from '../../../../hooks/store';
import { InputForm } from '../../../../UI/inputs';
import { OnSubmitLogin } from '../../helpers/OnSubmitLogin';
import { setUserData } from '../../store/slice';
import ValidateError from '../validate-error/ValidateError';
import s from './Login.module.scss';

const Login = () => {
  const router = useRouter();
  const dispatch = useCustomDispatch();
  const [checkPassword, setCheckPassword] = React.useState(true);
  const isVisiblePass = checkPassword ? 'password' : 'text';
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  return (
    <form
      className={s.auth}
      onSubmit={handleSubmit(
        OnSubmitLogin(reset, router, dispatch, setUserData)
      )}
    >
      <InputForm
        register={register('email', { required: 'Email Address is required' })}
        placeholder="Enter your email"
        type="email"
      />
      {errors?.email && <ValidateError message={`${errors?.email?.message}`} />}
      <InputForm
        register={register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum length of password 8 chars'
          },
        })}
        placeholder="Enter your password"
        icon="icons/interactions/eye.svg"
        onClickIcon={() => setCheckPassword(!checkPassword)}
        type={isVisiblePass}
      />
      {errors?.password && <ValidateError message={`${errors?.password?.message}`} />}

      <button disabled={!isValid} className={`btn-reset ${s.auth__submit}`}>
        Login
      </button>
    </form>
  );
};

export default Login;
