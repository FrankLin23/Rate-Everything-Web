interface LoginInfo {
  username: string | null;
  password: string | null;
}

interface RegisterInfo {
  username: string | null;
  password: string | null;
  email: string | null;
}

interface CurrentUser {
  username: string | null;
  nickname: string | null;
  email: string | null;
  profile: string | null;
  avatar: string | null;
}
