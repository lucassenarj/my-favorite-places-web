import IPhoto from "./photo";
import IUser from "./user";

type IPlace = {
  place_id: number;
  slug: string;
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
  photos?: IPhoto[];
};

export default IPlace;
