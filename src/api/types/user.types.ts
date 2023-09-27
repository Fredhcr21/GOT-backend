export interface UserFilter {
  email: string;
  fullName: string;
}

export interface Account {
  email: string;
  fullName: string;
  accesToken: string;
  refreshToken: string;
}
