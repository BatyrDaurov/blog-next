import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCustomDispatch } from '../../../../hooks/store';
import { InputForm } from '../../../../UI/inputs';
import { OnSubmitRegistration } from '../../helpers/OnSubmitRegistration';
import { setUserData } from '../../store/slice';
import ValidateError from '../validate-error/ValidateError';
import s from './Registration.module.scss';


const Registration = () => {
  const [checkPassword, setCheckPassword] = React.useState(true);
  const dispatch = useCustomDispatch();
  const router = useRouter();
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
        OnSubmitRegistration(reset, router, dispatch, setUserData)
      )}
    >
      <InputForm
        register={register('name', {
          required: true, minLength: {
            value: 3,
            message: 'Name must be longer than 3 characters'
          }
        })}
        placeholder="Enter your name"
        type="text"
      />
      {errors?.name && <ValidateError message={`${errors?.name?.message}`} />}
      <InputForm
        register={register('surname', {
          required: true, minLength: {
            value: 5,
            message: 'Surname must be longer than 5 characters'
          }
        })}
        placeholder="Enter your surname"
        type="text"
      />
      {errors?.surname && <ValidateError message={`${errors?.surname?.message}`} />}
      <InputForm
        register={register('email', { required: 'Email Address is required' })}
        placeholder="Enter your email"
        type="email"
      />
      {errors?.email && <ValidateError message={`${errors?.email?.message}`} />}
      <InputForm
        register={register('password', {
          required: true,
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
        Registration
      </button>
    </form>
  );
};

export default Registration;
