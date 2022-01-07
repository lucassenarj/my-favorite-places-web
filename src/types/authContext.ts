import ILogin from "./login";
import IUser from "./user";

type IAuthContext = {
  isAuthenticated: boolean;
  user: IUser | null;
  handleSignIn: (data: ILogin) => Promise<void>;
  handleLogout: () => Promise<void>;
};

export default IAuthContext;
