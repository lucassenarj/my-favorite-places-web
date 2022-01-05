import IPlace from "./place";

type IMyInfo = {
  user_id: number;
  name: string;
  email: string;
  avatar?: string;
  places?: IPlace[];
};

export default IMyInfo;
