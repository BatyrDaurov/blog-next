export type UserActionType = {
  status: 'deactivated' | 'activated';
  user: UserType;
};
export type UserType = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  passwordHash: string;
  avatarURL: string;
  role: 'watcher' | 'admin' | '';
  personalArticles: any[];
  likedArticles: any[];
  createdAt: string;
  updatedAt: string;
};
