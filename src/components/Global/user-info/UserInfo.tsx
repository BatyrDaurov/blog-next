import Image from 'next/image';
import { destroyCookie } from 'nookies';
import { UserActionType } from '../../../@types/UserType';
import { useCustomDispatch } from '../../../hooks/store';
import { removeUserData } from '../../../modules/authorization-page/store/slice';
import s from './UserInfo.module.scss';
type Props = {
  user: UserActionType;
};

const UserInfo = ({ user }: Props) => {
  const dispatch = useCustomDispatch()
  return (
    <>
      <div className={s.user}>
        <h2>
          {user.user?.surname} <br /> {user.user?.name}
        </h2>
        {user.user?.avatarURL && (
          <Image
            className={s.user__img}
            src={user.user?.avatarURL}
            objectFit={'cover'}
            width={50}
            height={50}
            title={`${user.user?.name} ${user.user?.surname}`}
            alt={`User - ${user.user?.name} | Batyr.blog`}
          />
        )}
        <button className={`btn-reset ${s.popup}`} onClick={() => {
          dispatch(removeUserData())
          destroyCookie(undefined, 'authToken')
        }} >Log-out</button>
      </div>
    </>
  );
};

export default UserInfo;
