import React from 'react';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import s from './AuthorizationPage.module.scss';

const AuthorizationPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const title = isLogin ? 'Sign Up' : 'Sign In'
  const isRegistered = isLogin ? 'if you have' : 'if you don\'t an'
  const buttonText = isLogin ? 'Login' : 'Register here!'

  return (
    <section className={s.auth}>
      <div className={`container ${s.auth__container}`}>
        <div className={s.auth__left}>
          <h1 className={s.auth__title}>
            {title} to <br /> Recharge direct
          </h1>
          <p className={s.auth__text}>
            {isRegistered} account here <br /> you can {' '}
            <button className={`btn-reset ${s.auth__link}`} onClick={() => setIsLogin((prev: boolean) => !prev)}>
              {buttonText}
            </button>
          </p>
        </div>
        <div className={s.auth__right}>
          {isLogin ? (
            <Registration />
          ) : (
            <Login />
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthorizationPage;
