import IPlace from "./place";

type IUser = {
  user_id: number;
  username: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  count?: number;
  places?: IPlace[];
};

export default IUser;
