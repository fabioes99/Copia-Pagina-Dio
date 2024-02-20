export interface IUser {
  objectId: string;
  username: string;
  email: string;
 }


export interface IAuthContext {
 user: IUser
 handleLogin: ( loginData: IloginData ) => Promise<void>
 handleSignOut: () => void
 handleSignUp: ( loginData: IloginData ) => Promise<void>
}

export interface IAuthContextProviderProps{
  children: React.ReactNode
}

export interface IloginData{
  email: string;
  senha: string;
}