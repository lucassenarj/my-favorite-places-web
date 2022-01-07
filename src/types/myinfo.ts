import IPlace from "./place";

type IMyInfo = {
  isAuthenticated?: boolean;
  user_id: number;
  name: string;
  email: string;
  avatar?: string;
  places?: IPlace[];
};

export default IMyInfo;
