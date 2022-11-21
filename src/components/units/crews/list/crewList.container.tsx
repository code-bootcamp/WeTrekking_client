import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import {
  accessTokenState,
  isMountainModalOpenState,
  mountainAddressState,
} from "../../../../store";

import { errorModal } from "../../../commons/modals/alertModals";
import { CREATE_DIB } from "../detail/crewDetail.queries";

import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
  FETCH_MOUNTAIN_KING,
  FETCH_USER,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const [sort, setSort] = useState(true);
  const [visible, setVisible] = useState(9);
  const [loginId, setLoginId] = useState("");
  const [region, setRegion] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [search, setSearch] = useState("");

  const [accessToken] = useRecoilState(accessTokenState);
  const [isMountainModalOpen, setIsMountainModalOpen] = useRecoilState(
    isMountainModalOpenState
  );
  const [mountainAddress] = useRecoilState(mountainAddressState);

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCrewBoardsLatestFirst">
  >(FETCH_CREW_BOARDS_LATEST, {
    variables: { region: "", startDate: "", endDate: "", search: "" },
  });

  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);

  const { data: loggedUser } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const { data: mountainKing } =
    useQuery<Pick<IQuery, "fetchMountainKing">>(FETCH_MOUNTAIN_KING);

  console.log(mountainKing);

  useEffect(() => {
    setLoginId(String(loggedUser?.fetchUser.id));
  }, [loggedUser]);

  const itemsLatest = data?.fetchCrewBoardsLatestFirst.flat().slice(0, visible);
  const itemsDeadLine = deadLine?.fetchCrewBoardsDeadlineFirst
    .flat()
    .slice(0, visible);

  const onClickPick = (event: MouseEvent<HTMLDivElement>) => {
    try {
      void createDib({
        variables: { crewBoardId: event.currentTarget.id },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
    } catch (error) {
      errorModal("로그인이 필요합니다.");
      void router.push("/login");
    }
  };

  const onClickToWrite = () => {
    if (!accessToken) {
      errorModal("로그인이 필요합니다.");
      void router.push("/login");
    } else {
      void router.push("/crews/write");
    }
  };

  const onClickLatest = () => {
    setSort(true);
  };

  const onClickDeadLine = () => {
    setSort(false);
  };

  const onClickFetchMore = async () => {
    setVisible((prev) => prev + 9);
  };

  const onClickMountainSearch = () => {
    setIsMountainModalOpen(true);
  };
  const onChangeRegion = (value: any) => {
    setRegion(value);
  };

  const search = mountainAddress.split("/", 1)[0].slice(0, -1);

  const onChangeDate = (value: any, stringDate: string) => {
    setStartDate(stringDate[0]);
    setEndDate(stringDate[1]);
  };

  const onClickLatestSearch = async () => {
    await refetch({ region, startDate, endDate, search });
  };

  return (
    <CrewListUi
      onClickToWrite={onClickToWrite}
      sort={sort}
      onClickLatest={onClickLatest}
      onClickDeadLine={onClickDeadLine}
      onClickPick={onClickPick}
      onClickFetchMore={onClickFetchMore}
      itemsLatest={itemsLatest}
      itemsDeadLine={itemsDeadLine}
      loginId={loginId}
      onClickMountainSearch={onClickMountainSearch}
      isMountainModalOpen={isMountainModalOpen}
      mountainAddress={mountainAddress}
      onChangeRegion={onChangeRegion}
      onChangeDate={onChangeDate}
      onClickLatestSearch={onClickLatestSearch}
      visible={visible}
      mountainKing={mountainKing}
    />
  );
};

export default CrewList;
