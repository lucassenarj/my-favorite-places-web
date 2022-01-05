import IUser from "./user";

type IPlace = {
  place_id: number;
  title: string;
  address: string;
  latitude: string;
  longitude: string;
  description?: string;
  visited_at?: string;
  thumbnail?: string;
  shared: boolean;
  user_id: number;
  created_at: string;
  rating_avg?: number;
  user: IUser;
};

export default IPlace;
