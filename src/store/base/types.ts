// import { TMatch } from 'store/match/types';
// import { TUser } from 'store/user/types';
// import { TExtraBet } from 'store/bet/types';
// import { ITeam } from 'store/team/types';
// import { TUserRanking } from 'store/ranking/types';
// import { TNews } from 'store/news/types';
// import { IPlayer } from 'store/player/types';

export type TGuest = {
  id: number;
  code: string;
  name: string;
  confirmed: number;
  timestamp: string;
};

export type TError = {
  code: string;
  message: string;
  showToast: boolean;
};

interface IResult {
  errors: TError[];
  guests: TGuest[];
}

export type TQuery = {
  timestamp: string;
  result: IResult;
  isSuccess: boolean;
  code: number;
};
