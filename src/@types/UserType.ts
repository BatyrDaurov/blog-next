export type UserActionType = {
  status: 'deactivated' | 'activated';
  user: UserType;
};
export type UserType = {
  _id: '';
  name: '';
  surname: '';
  email: '';
  passwordHash: '';
  avatarURL: '';
  role: '';
  createdAt: '';
  updatedAt: '';
};
