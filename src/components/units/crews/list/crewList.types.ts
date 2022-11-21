import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewListUiProps {
  onClickToWrite: () => void;
  sort: boolean;
  onClickLatest: () => void;
  onClickDeadLine: () => void;
  onClickPick: (event: MouseEvent<HTMLDivElement>) => void;
  onClickFetchMore: () => void;
  itemsLatest: any;
  itemsDeadLine: any;
  loginId: string;
  onClickMountainSearch: () => void;
  isMountainModalOpen: boolean;
  mountainAddress: string;
  onChangeRegion: (value: any) => void;
  onChangeDate: (value: any, stringDate: string) => void;
  onClickLatestSearch: () => void;
  visible: number;
  mountainKing?: Pick<IQuery, "fetchMountainKing">;
}
