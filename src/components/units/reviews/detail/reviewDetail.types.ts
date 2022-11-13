import { IQuery } from "../../../../commons/types/generated/types";

export interface IReviewDetailUiProps {
  data?: Pick<IQuery, "fetchReviewBoard">;
  onClickX: () => void;
  onLoadMore: any;
  reviewComments?: Pick<IQuery, "fetchReviewComments">;
}
