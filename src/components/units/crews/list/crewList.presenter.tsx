import { Select, Space } from "antd";
import * as S from "./crewList.styles";
import "antd/dist/antd.css";
import PickFalseSvg from "../../../commons/svg/pickFalse";
import { ICrewListUiProps } from "./crewList.types";
import { Avatar, AvatarGroup } from "@mui/material";
import Link from "next/link";
import { getDate } from "../../../../commons/utils/getDate";
import PickTrueSvg from "../../../commons/svg/pickTrue";
import MountainModal from "../../../commons/modals/mountainModal";

const CrewListUi = ({
  onClickToWrite,
  sort,
  onClickLatest,
  onClickDeadLine,
  onClickPick,
  onClickFetchMore,
  itemsLatest,
  itemsDeadLine,
  loginId,
  onClickMountainSearch,
  isMountainModalOpen,
  mountainAddress,
  onChangeRegion,
  onChangeDate,
  onClickLatestSearch,
  visible,
  mountainKing,
  onClickDeadLineSearch,
}: ICrewListUiProps) => {
  const { Option } = Select;

  return (
    <>
      <S.Wrapper>
        <S.RankingBox>
          <S.RankingTitle>TOP 3</S.RankingTitle>
          <S.RankingContainer>
            {mountainKing?.fetchMountainKing.map((el: any, index: number) => {
              return (
                <S.Ranking key={el.id}>
                  <Avatar
                    alt="Crew Image"
                    src={
                      el.user.profile_img === null
                        ? `/images/commons/basic-profile.png`
                        : `https://storage.googleapis.com/${String(
                            el.user.profile_img
                          )}`
                    }
                    style={{
                      border:
                        el.user.profile_img === null ? "1px solid #999" : "",
                    }}
                    className="avatar"
                  ></Avatar>
                  <S.RankingInform>
                    <S.RankingNickName>{el.user.nickname}</S.RankingNickName>
                    <S.RankingEmail>{el.user.email}</S.RankingEmail>
                  </S.RankingInform>
                  <S.RankingNumBox>
                    <S.RankingNum>TOP {index + 1}</S.RankingNum>
                  </S.RankingNumBox>
                </S.Ranking>
              );
            })}
          </S.RankingContainer>
        </S.RankingBox>
        <S.CrewBox>
          <S.Header>
            <S.TitleBox>
              <S.Title>?????? ?????????</S.Title>
              <S.OrderBox>
                <S.OrderList
                  onClick={onClickLatest}
                  className={sort ? "active" : ""}
                >
                  ?? ????????? ??????
                </S.OrderList>
                <S.OrderList
                  onClick={onClickDeadLine}
                  className={sort ? "" : "active"}
                >
                  ?? ????????? ??????
                </S.OrderList>
              </S.OrderBox>
            </S.TitleBox>
            <S.SearchBox>
              <S.SelectDateBox>
                <S.SelectAntD defaultValue="????????????" onChange={onChangeRegion}>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="?????????">?????????</Option>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="???????????????">???????????????</Option>
                  <Option value="?????????">?????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="????????????">????????????</Option>
                  <Option value="?????????">?????????</Option>
                </S.SelectAntD>
                <S.Partition></S.Partition>
                <Space direction="vertical">
                  <S.DateAntD
                    placeholder={["?????? ??????", "??? ??????"]}
                    onChange={onChangeDate}
                  />
                </Space>
              </S.SelectDateBox>
              <S.Partition></S.Partition>
              <S.MountainSearchBox>
                <S.Search
                  readOnly
                  placeholder="?????????"
                  value={mountainAddress.split("/", 1)[0].slice(0, -1)}
                />
                <S.MountainSearchBtn onClick={onClickMountainSearch}>
                  ??????
                </S.MountainSearchBtn>
              </S.MountainSearchBox>
              <S.SearchBtnBox>
                <S.SearchBtn
                  onClick={sort ? onClickLatestSearch : onClickDeadLineSearch}
                >
                  ??????
                </S.SearchBtn>
                <S.RegisterBtn onClick={onClickToWrite}>?????????</S.RegisterBtn>
              </S.SearchBtnBox>
            </S.SearchBox>
          </S.Header>
          <S.Body>
            {sort
              ? itemsLatest?.map((listMap: any) => (
                  <S.ListBox key={listMap.id}>
                    <S.ListHeader>
                      <S.ListInform>
                        <Avatar
                          alt="Crew Image"
                          src={
                            listMap?.user.profile_img === null
                              ? `/images/commons/basic-profile.png`
                              : `https://storage.googleapis.com/${String(
                                  listMap?.user.profile_img
                                )}`
                          }
                          style={{
                            border:
                              listMap?.user.profile_img === null
                                ? "1px solid #999"
                                : "",
                          }}
                          className="avatar"
                        ></Avatar>
                        <S.ListNickName>
                          {listMap?.user?.nickname}
                        </S.ListNickName>
                      </S.ListInform>
                      <S.ListPick onClick={onClickPick} id={listMap.id}>
                        {loginId === listMap.dibUsers[0]?.id ? (
                          <PickTrueSvg />
                        ) : (
                          <PickFalseSvg />
                        )}
                      </S.ListPick>
                    </S.ListHeader>
                    <Link href={`crews/${String(listMap?.id)}`}>
                      <S.ListContainer>
                        <S.ListThumbnail
                          style={{
                            backgroundImage: `url(https://storage.googleapis.com/${String(
                              (listMap?.thumbnail).replace(/ /g, "%20")
                            )})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></S.ListThumbnail>
                        <S.ListBody>
                          <S.ListTitleBox>
                            <S.ListTitle>{listMap?.title}</S.ListTitle>
                            <S.ListCreatedAt>
                              {getDate(listMap?.createdAt)}
                            </S.ListCreatedAt>
                          </S.ListTitleBox>
                          <S.ListCrewsBox>
                            <AvatarGroup max={20}>
                              {listMap?.assignedUsers?.map((assignMap: any) => [
                                <Avatar
                                  key={assignMap?.id}
                                  alt="user profile"
                                  src={
                                    assignMap?.profile_img === null
                                      ? `/images/commons/basic-profile.png`
                                      : `https://storage.googleapis.com/${String(
                                          assignMap?.profile_img
                                        )}`
                                  }
                                  style={{
                                    border:
                                      assignMap?.profile_img === null
                                        ? "1px solid #999"
                                        : "",
                                  }}
                                  className="avatar"
                                />,
                              ])}
                            </AvatarGroup>
                            <S.ListCrewsNum>
                              ???????????? {listMap?.assignedUsers.length}/
                              {listMap?.peoples}
                            </S.ListCrewsNum>
                          </S.ListCrewsBox>
                        </S.ListBody>
                        <S.ListFooter>
                          <S.ListLocationBox>
                            <S.Location>{listMap.mountain.mountain}</S.Location>
                          </S.ListLocationBox>
                          <S.ListTimeAndDayBox>
                            <S.Day>{listMap?.date}</S.Day>
                            <S.TimePartition></S.TimePartition>
                            <S.Time>
                              {listMap?.dateTime
                                .replace("am", "AM")
                                .replace("pm", "PM")}
                            </S.Time>
                          </S.ListTimeAndDayBox>
                        </S.ListFooter>
                      </S.ListContainer>
                    </Link>
                  </S.ListBox>
                ))
              : itemsDeadLine?.map((listMap: any) => (
                  <S.ListBox key={listMap?.id}>
                    <S.ListHeader>
                      <S.ListInform>
                        <Avatar
                          alt="Crew Image"
                          src={
                            listMap?.user.profile_img === null
                              ? `/images/commons/basic-profile.png`
                              : `https://storage.googleapis.com/${String(
                                  listMap?.user.profile_img
                                )}`
                          }
                          style={{
                            border:
                              listMap?.user.profile_img === null
                                ? "1px solid #999"
                                : "",
                          }}
                          className="avatar"
                        ></Avatar>
                        <S.ListNickName>
                          {listMap?.user?.nickname}
                        </S.ListNickName>
                      </S.ListInform>
                      <S.ListPick onClick={onClickPick} id={listMap.id}>
                        {loginId === listMap.dibUsers[0]?.id ? (
                          <PickTrueSvg />
                        ) : (
                          <PickFalseSvg />
                        )}
                      </S.ListPick>
                    </S.ListHeader>
                    <Link href={`crews/${String(listMap?.id)}`}>
                      <S.ListContainer>
                        <S.ListThumbnail
                          style={{
                            backgroundImage: `url(https://storage.googleapis.com/${String(
                              listMap?.thumbnail
                            )})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></S.ListThumbnail>
                        <S.ListBody>
                          <S.ListTitleBox>
                            <S.ListTitle>{listMap?.title}</S.ListTitle>
                            <S.ListCreatedAt>
                              {getDate(listMap?.createdAt)}
                            </S.ListCreatedAt>
                          </S.ListTitleBox>
                          <S.ListCrewsBox>
                            <AvatarGroup max={20}>
                              {listMap?.assignedUsers?.map((assignMap: any) => [
                                <Avatar
                                  key={assignMap?.id}
                                  alt="user profile"
                                  src={
                                    assignMap?.profile_img === null
                                      ? `/images/commons/basic-profile.png`
                                      : `https://storage.googleapis.com/${String(
                                          assignMap?.profile_img
                                        )}`
                                  }
                                  style={{
                                    border:
                                      assignMap?.profile_img === null
                                        ? "1px solid #999"
                                        : "",
                                  }}
                                  className="avatar"
                                />,
                              ])}
                            </AvatarGroup>
                            <S.ListCrewsNum>
                              ???????????? {listMap?.assignedUsers.length}/
                              {listMap?.peoples}
                            </S.ListCrewsNum>
                          </S.ListCrewsBox>
                        </S.ListBody>
                        <S.ListFooter>
                          <S.ListLocationBox>
                            <S.Location>{listMap.mountain.mountain}</S.Location>
                          </S.ListLocationBox>
                          <S.ListTimeAndDayBox>
                            <S.Day>{listMap?.date}</S.Day>
                            <S.TimePartition></S.TimePartition>
                            <S.Time>
                              {listMap?.dateTime
                                .replace("am", "AM")
                                .replace("pm", "PM")}
                            </S.Time>
                          </S.ListTimeAndDayBox>
                        </S.ListFooter>
                      </S.ListContainer>
                    </Link>
                  </S.ListBox>
                ))}
          </S.Body>
          <S.Footer>
            {itemsLatest?.length < visible ? (
              <></>
            ) : (
              <S.MoreBtn onClick={onClickFetchMore}>?????????</S.MoreBtn>
            )}
          </S.Footer>
        </S.CrewBox>
        {isMountainModalOpen && <MountainModal />}
      </S.Wrapper>
    </>
  );
};

export default CrewListUi;
