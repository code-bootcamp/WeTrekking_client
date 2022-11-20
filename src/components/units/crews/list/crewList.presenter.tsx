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
  onClickDeadLineSearch,
}: ICrewListUiProps) => {
  const { Option } = Select;

  return (
    <>
      <S.Wrapper>
        <S.RankingBox>
          <S.RankingTitle>TOP 3</S.RankingTitle>
          <S.RankingContainer>
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>춘딩딩</S.RankingNickName>
                <S.RankingEmail>123@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 1</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            {/* 여기부터 삭제 */}
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>땅오</S.RankingNickName>
                <S.RankingEmail>456@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 2</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>짱구</S.RankingNickName>
                <S.RankingEmail>789@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 3</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            {/* 여기까지 삭제 */}
          </S.RankingContainer>
        </S.RankingBox>
        <S.CrewBox>
          <S.Header>
            <S.TitleBox>
              <S.Title>크루 리스트</S.Title>
              <S.OrderBox>
                <S.OrderList
                  onClick={onClickLatest}
                  className={sort ? "active" : ""}
                >
                  · 최신순 보기
                </S.OrderList>
                <S.OrderList
                  onClick={onClickDeadLine}
                  className={sort ? "" : "active"}
                >
                  · 마감순 보기
                </S.OrderList>
              </S.OrderBox>
            </S.TitleBox>
            <S.SearchBox>
              <S.SelectDateBox>
                <S.SelectAntD defaultValue="지역선택" onChange={onChangeRegion}>
                  <Option value="서울특별시">서울특별시</Option>
                  <Option value="경기도">경기도</Option>
                  <Option value="인천광역시">인천광역시</Option>
                  <Option value="대전광역시">대전광역시</Option>
                  <Option value="부산광역시">부산광역시</Option>
                  <Option value="대구광역시">대구광역시</Option>
                  <Option value="광주광역시">광주광역시</Option>
                  <Option value="강원도">강원도</Option>
                  <Option value="충청남도">충청남도</Option>
                  <Option value="충청북도">충청북도</Option>
                  <Option value="전라남도">전라남도</Option>
                  <Option value="전라북도">전라북도</Option>
                  <Option value="경상남도">경상남도</Option>
                  <Option value="경상북도">경상북도</Option>
                  <Option value="제주도">제주도</Option>
                </S.SelectAntD>
                <S.Partition></S.Partition>
                <Space direction="vertical">
                  <S.DateAntD
                    placeholder={["시작 날짜", "끝 날짜"]}
                    onChange={onChangeDate}
                  />
                </Space>
              </S.SelectDateBox>
              <S.Partition></S.Partition>
              <S.MountainSearchBox>
                <S.Search
                  placeholder="산이름"
                  value={mountainAddress.split("/", 1)[0].slice(0, -1)}
                />
                <S.MountainSearchBtn onClick={onClickMountainSearch}>
                  찾기
                </S.MountainSearchBtn>
              </S.MountainSearchBox>
              <S.SearchBtnBox>
                <S.SearchBtn
                  onClick={sort ? onClickLatestSearch : onClickDeadLineSearch}
                >
                  검색
                </S.SearchBtn>
                <S.RegisterBtn onClick={onClickToWrite}>글쓰기</S.RegisterBtn>
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
                          src={`https://storage.googleapis.com/${String(
                            listMap?.user.profile_img
                          )}`}
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
                            backgroundSize: "contain",
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
                                  src={`https://storage.googleapis.com/${String(
                                    assignMap?.profile_img
                                  )}`}
                                  sx={{ width: 24, height: 24 }}
                                />,
                              ])}
                            </AvatarGroup>
                            <S.ListCrewsNum>
                              모집인원 {listMap?.assignedUsers.length}/
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
                          src={`https://storage.googleapis.com/${String(
                            listMap?.user.profile_img
                          )}`}
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
                            backgroundSize: "contain",
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
                                  src={`https://storage.googleapis.com/${String(
                                    assignMap?.profile_img
                                  )}`}
                                  sx={{ width: 24, height: 24 }}
                                />,
                              ])}
                            </AvatarGroup>
                            <S.ListCrewsNum>
                              모집인원 {listMap?.assignedUsers.length}/
                              {listMap?.peoples}
                            </S.ListCrewsNum>
                            {console.log(listMap?.assignedUsers)}
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
              <S.MoreBtn onClick={onClickFetchMore}>더보기</S.MoreBtn>
            )}
          </S.Footer>
        </S.CrewBox>
        {isMountainModalOpen && <MountainModal />}
      </S.Wrapper>
    </>
  );
};

export default CrewListUi;
