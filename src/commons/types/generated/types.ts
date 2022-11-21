export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IChat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  name: Scalars['String'];
  roomName: Scalars['String'];
};

export type ICreateCrewBoardInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  date: Scalars['String'];
  dateTime: Scalars['String'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  peoples: Scalars['Int'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateCrewCommentInput = {
  boardId: Scalars['String'];
  comment: Scalars['String'];
};

export type ICreateReviewBoardInput = {
  review: Scalars['String'];
  star: Scalars['Float'];
  title: Scalars['String'];
};

export type ICreateSubCrewCommentInput = {
  parentId: Scalars['String'];
  subComment: Scalars['String'];
};

export type ICreateUserInput = {
  birth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
};

export type ICrewBoard = {
  __typename?: 'CrewBoard';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  dateTime: Scalars['String'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['String'];
  mountain: IMountain;
  peoples: Scalars['Int'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICrewBoardAndUser = {
  __typename?: 'CrewBoardAndUser';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  assignedUsers: Array<IUser>;
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  dateTime: Scalars['String'];
  description: Scalars['String'];
  dibUsers: Array<IUser>;
  dues: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['String'];
  mountain: IMountain;
  peoples: Scalars['Int'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IUser;
};

export type ICrewBoardImage = {
  __typename?: 'CrewBoardImage';
  crewBoard: ICrewBoard;
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  isMain: Scalars['Boolean'];
};

export type ICrewComment = {
  __typename?: 'CrewComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  crewBoard: ICrewBoard;
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  subCrewComment: ICrewComment;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICrewUserList = {
  __typename?: 'CrewUserList';
  crewBoard: ICrewBoard;
  id: Scalars['String'];
  status: Scalars['String'];
  user: IUser;
};

export type IDibsWithCrewBoard = {
  __typename?: 'DibsWithCrewBoard';
  crewBoard: ICrewBoardAndUser;
  id: Scalars['String'];
  user: IUser;
};

export type IMountain = {
  __typename?: 'Mountain';
  address: Scalars['String'];
  id: Scalars['String'];
  mountain: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  acceptCrew: ICrewUserList;
  cancelPointPayment: IPointPayment;
  checkEmail: Scalars['String'];
  checkNickName: Scalars['String'];
  checkTokenPhone: Scalars['String'];
  createCrewBoard: ICrewBoard;
  createCrewBoardTEST: ICrewBoard;
  /** 댓글 생성하기 */
  createCrewComment: ICrewComment;
  /** 대댓글 생성하기 */
  createCrewSubComment: ICrewComment;
  createCrewUserList: Scalars['String'];
  createDib: Scalars['Boolean'];
  createMountain: Scalars['String'];
  createPointPayment: IPointPayment;
  createReviewBoard: IReviewBoard;
  createReviewComment: IReviewComment;
  createRoom: IRoom;
  createUser: IUser;
  deleteCrewBoard: Scalars['Boolean'];
  /** 댓글 삭제하기 */
  deleteCrewComment: Scalars['Boolean'];
  /** 대댓글 삭제하기 */
  deleteCrewSubComment: Scalars['Boolean'];
  deleteCrewUserList: Scalars['String'];
  deleteReviewBoard: Scalars['Boolean'];
  deleteReviewComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  findUserEmail: Scalars['String'];
  findUserPassword: Scalars['String'];
  finishCrew: ICrewUserList;
  likeReviewBoard: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  rejectCrew: ICrewUserList;
  restoreAccessToken: Scalars['String'];
  sendTokenToPhone: Scalars['String'];
  socialUpdateUser: IUser;
  updateCrewBoard: ICrewBoard;
  /** 댓글 수정하기 */
  updateCrewComment: ICrewComment;
  /** 대댓글 수정하기 */
  updateCrewSubComment: ICrewComment;
  updatePassword: Scalars['String'];
  updateReviewBoard: IReviewBoard;
  updateReviewComment: IReviewComment;
  updateUser: IUser;
  uploadCrewBoardImage: Array<ICrewBoardImage>;
  uploadFileForUserProfile: Scalars['String'];
  uploadFilesForCrewBoard: Array<Scalars['String']>;
  uploadFilesForReviewBoard: Array<Scalars['String']>;
  uploadReviewBoardImage: Array<IReviewBoardImage>;
};


export type IMutationAcceptCrewArgs = {
  id: Scalars['String'];
};


export type IMutationCancelPointPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCheckEmailArgs = {
  email: Scalars['String'];
};


export type IMutationCheckNickNameArgs = {
  nickname: Scalars['String'];
};


export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationCreateCrewBoardArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
  imgURL: Array<Scalars['String']>;
  mountainId: Scalars['String'];
};


export type IMutationCreateCrewBoardTestArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
};


export type IMutationCreateCrewCommentArgs = {
  createCrewCommentInput: ICreateCrewCommentInput;
};


export type IMutationCreateCrewSubCommentArgs = {
  createSubCrewCommentInput: ICreateSubCrewCommentInput;
};


export type IMutationCreateCrewUserListArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationCreateDibArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationCreatePointPaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateReviewBoardArgs = {
  createReviewBoardInput: ICreateReviewBoardInput;
  crewUserListId: Scalars['String'];
  imgURL: Array<Scalars['String']>;
};


export type IMutationCreateReviewCommentArgs = {
  reviewBoardId: Scalars['String'];
  reviewComment: Scalars['String'];
};


export type IMutationCreateRoomArgs = {
  boardId: Scalars['String'];
  roomName: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteCrewCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteCrewSubCommentArgs = {
  subCommentId: Scalars['String'];
};


export type IMutationDeleteCrewUserListArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IMutationDeleteReviewCommentArgs = {
  reviewCommentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationFindUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationFindUserPasswordArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationFinishCrewArgs = {
  id: Scalars['String'];
};


export type IMutationLikeReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRejectCrewArgs = {
  id: Scalars['String'];
};


export type IMutationSendTokenToPhoneArgs = {
  phone: Scalars['String'];
};


export type IMutationSocialUpdateUserArgs = {
  phoneToken: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateCrewBoardArgs = {
  crewBoardId: Scalars['String'];
  imgURL: Array<Scalars['String']>;
  mountainId: Scalars['String'];
  updateCrewBoardInput: IUpdateCrewBoardInput;
};


export type IMutationUpdateCrewCommentArgs = {
  commentId: Scalars['String'];
  updateCrewCommentInput: IUpdateCrewCommentInput;
};


export type IMutationUpdateCrewSubCommentArgs = {
  subCommentId: Scalars['String'];
  updateSubCrewCommentInput: IUpdateSubCrewCommentInput;
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
};


export type IMutationUpdateReviewBoardArgs = {
  imgURL: Array<Scalars['String']>;
  reviewBoardId: Scalars['String'];
  updateReviewBoardInput: IUpdateReviewBoardInput;
};


export type IMutationUpdateReviewCommentArgs = {
  updateReviewCommentInput: IUpdateReviewCommentInput;
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadCrewBoardImageArgs = {
  crewBoardId: Scalars['String'];
  imgURL: Array<Scalars['String']>;
};


export type IMutationUploadFileForUserProfileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesForCrewBoardArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadFilesForReviewBoardArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadReviewBoardImageArgs = {
  imgURL: Array<Scalars['String']>;
  reviewBoardId: Scalars['String'];
};

export enum IPoint_Payment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPointHistory = {
  __typename?: 'PointHistory';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type IPointPayment = {
  __typename?: 'PointPayment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Payment_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  checkCancellable: Scalars['Boolean'];
  fetchAcceptedList: Array<ICrewUserList>;
  fetchAllCrewBoardImages: Array<ICrewBoardImage>;
  fetchAllCrewBoards: Array<ICrewBoard>;
  fetchAllCrewBoardsWithDelete: Array<ICrewBoard>;
  fetchAllCrewBoardsWithUsers: Array<ICrewBoardAndUser>;
  fetchAllMountains: Array<IMountain>;
  fetchAllReviewBoardImages: Array<IReviewBoardImage>;
  fetchApplyList: Array<ICrewUserList>;
  fetchBoardImage: Array<ICrewBoardImage>;
  fetchChatUsers: Array<ICrewUserList>;
  fetchCrewBoard: ICrewBoard;
  fetchCrewBoardsBySearch: Array<ICrewBoard>;
  fetchCrewBoardsDeadlineFirst: Array<ICrewBoardAndUser>;
  fetchCrewBoardsLatestFirst: Array<ICrewBoardAndUser>;
  fetchCrewBoardsTEST: Array<Array<ICrewBoard>>;
  /** boardId에 해당하는 댓글 전체 조회 */
  fetchCrewComments: Array<ICrewComment>;
  /** commentId에 해당하는 대댓글 조회하기 */
  fetchCrewSubComments: Array<ICrewComment>;
  fetchCrewUserList: Array<Array<ICrewUserList>>;
  fetchDibs: Array<IDibsWithCrewBoard>;
  fetchHostCrewList: Array<Array<ICrewBoard>>;
  fetchLogs: Array<IChat>;
  fetchMountain: IMountain;
  fetchMountainKing: Array<IReviewCount>;
  fetchMountainsWithSearch: Array<IMountain>;
  /** 로그인한 유저의 이용내역 전체 조회 */
  fetchPointHistory: Array<IPointHistory>;
  fetchPointPayment: IPointPayment;
  fetchPointPayments: Array<Array<IPointPayment>>;
  fetchReviewBoard: IReviewBoard;
  fetchReviewBoardImage: Array<IReviewBoardImage>;
  fetchReviewBoards: Array<Array<IReviewBoard>>;
  fetchReviewComments: Array<IReviewComment>;
  /** 산이름을 통해 좌표 반환 */
  fetchTrekkingCoordinate: Array<ITrekkingInfo>;
  fetchTrekkingInfo: ITrekking;
  fetchUser: IUser;
  /** userId에 해당하는 댓글 전체 조회 */
  fetchUserCrewComments: Array<ICrewComment>;
  /** userId와 boardId에 해당하는 대댓글 조회하기 */
  fetchUserCrewSubComments: Array<ICrewComment>;
  fetchVisitList: Array<ICrewUserList>;
};


export type IQueryCheckCancellableArgs = {
  amount: Scalars['Float'];
};


export type IQueryFetchAcceptedListArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchApplyListArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchChatUsersArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchCrewBoardsBySearchArgs = {
  endDate: Scalars['String'];
  region: Scalars['String'];
  search: Scalars['String'];
  startDate: Scalars['String'];
};


export type IQueryFetchCrewBoardsDeadlineFirstArgs = {
  endDate: Scalars['String'];
  region: Scalars['String'];
  search: Scalars['String'];
  startDate: Scalars['String'];
};


export type IQueryFetchCrewBoardsLatestFirstArgs = {
  endDate: Scalars['String'];
  region: Scalars['String'];
  search: Scalars['String'];
  startDate: Scalars['String'];
};


export type IQueryFetchCrewCommentsArgs = {
  boardId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCrewSubCommentsArgs = {
  commentId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchLogsArgs = {
  roomName: Scalars['String'];
};


export type IQueryFetchMountainArgs = {
  mountainId: Scalars['String'];
};


export type IQueryFetchMountainsWithSearchArgs = {
  search: Scalars['String'];
};


export type IQueryFetchPointHistoryArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewBoardImageArgs = {
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchTrekkingCoordinateArgs = {
  mountainName: Scalars['String'];
};


export type IQueryFetchTrekkingInfoArgs = {
  address: Scalars['String'];
  mountainName: Scalars['String'];
};


export type IQueryFetchUserCrewCommentsArgs = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchUserCrewSubCommentsArgs = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};

export type IReviewBoard = {
  __typename?: 'ReviewBoard';
  createdAt: Scalars['DateTime'];
  crewUserList: ICrewUserList;
  id: Scalars['String'];
  like: Scalars['Int'];
  review: Scalars['String'];
  star: Scalars['Float'];
  title: Scalars['String'];
  user: IUser;
};

export type IReviewBoardImage = {
  __typename?: 'ReviewBoardImage';
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  isMain: Scalars['Boolean'];
  reviewBoard: IReviewBoard;
};

export type IReviewComment = {
  __typename?: 'ReviewComment';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  reviewBoard: IReviewBoard;
  reviewComment?: Maybe<Scalars['String']>;
  user: IUser;
};

export type IReviewCount = {
  __typename?: 'ReviewCount';
  id: Scalars['String'];
  reviewCount: Scalars['Int'];
  user: IUser;
};

export type IRoom = {
  __typename?: 'Room';
  boardId: Scalars['String'];
  roomName: Scalars['String'];
  user: Scalars['String'];
};

export type ITrekking = {
  __typename?: 'Trekking';
  coordinate: Array<Array<Scalars['Float']>>;
  mountainName: Scalars['String'];
};

export type ITrekkingInfo = {
  __typename?: 'TrekkingInfo';
  coordinate: Array<Array<Scalars['Float']>>;
  difficulty: Scalars['String'];
  mountainName: Scalars['String'];
  trekkingName: Scalars['String'];
};

export type IUpdateCrewBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dues?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  peoples?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateCrewCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewBoardInput = {
  review?: InputMaybe<Scalars['String']>;
  star?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSubCrewCommentInput = {
  parentId?: InputMaybe<Scalars['String']>;
  subComment?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  birth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  birth: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  profile_img?: Maybe<Scalars['String']>;
};

export type IUpdateReviewCommentInput = {
  comment?: InputMaybe<Scalars['String']>;
  reviewCommentId?: InputMaybe<Scalars['String']>;
};
