import * as S from "./picked.styles";
import * as A from "../../crews/list/crewList.styles";
import { Avatar, AvatarGroup } from "@mui/material";
import MyPageNav from "../navigation";
import { IPickedListUiProps } from "./picked.types";
import PickTrueSvg from "../../../commons/svg/pickTrue";
import Link from "next/link";

const PickedListUi = ({
  pickedData,
  onClickMore,
  visible,
  data,
}: IPickedListUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="찜 리스트" />
      <S.Container>
        <S.PickedListContainer>
          {pickedData?.map((el: any) => {
            return (
              <Link href={`/crews/${String(el.crewBoard.id)}`} key={el.id}>
                <A.ListBox>
                  <A.ListHeader>
                    <A.ListInform>
                      <Avatar
                        src={
                          el.crewBoard.user.profile_img === null
                            ? `/images/commons/basic-profile.png`
                            : `https://storage.googleapis.com/${String(
                                el.crewBoard.user.profile_img
                              )}`
                        }
                        style={{
                          border:
                            el.crewBoard.user.profile_img === null
                              ? "1px solid #999"
                              : "",
                        }}
                        className="avatar"
                      ></Avatar>
                      <A.ListNickName>{el.crewBoard.user.name}</A.ListNickName>
                    </A.ListInform>
                    <A.ListPick>
                      <PickTrueSvg />
                    </A.ListPick>
                  </A.ListHeader>
                  <A.ListContainer>
                    <A.ListThumbnail
                      style={{
                        backgroundImage: `url(https://storage.googleapis.com/${String(
                          el.crewBoard.thumbnail
                        )})`,
                      }}
                    ></A.ListThumbnail>
                    <A.ListBody>
                      <A.ListTitleBox>
                        <A.ListTitle>{el.crewBoard.title}</A.ListTitle>
                        <A.ListCreatedAt>
                          {el.crewBoard.createdAt.slice(0, 10)}
                        </A.ListCreatedAt>
                      </A.ListTitleBox>
                      <A.ListCrewsBox>
                        {/* <A.ListCrewsImg></A.ListCrewsImg> */}

                        <AvatarGroup max={4}>
                          {el.crewBoard.assignedUsers.map((el: any) => {
                            return (
                              <Avatar
                                alt="유저 이미지"
                                src={
                                  el.profile_img === null
                                    ? `/images/commons/basic-profile.png`
                                    : `https://storage.googleapis.com/${String(
                                        el.profile_img
                                      )}`
                                }
                                style={{
                                  border:
                                    el.profile_img === null
                                      ? "1px solid #999"
                                      : "",
                                }}
                                className="avatar"
                                key={el.id}
                              />
                            );
                          })}
                        </AvatarGroup>
                        <A.ListCrewsNum>
                          모집인원 {el.crewBoard.assignedUsers.length}/
                          {el.crewBoard.peoples}
                        </A.ListCrewsNum>
                      </A.ListCrewsBox>
                    </A.ListBody>
                    <A.ListFooter>
                      <A.ListLocationBox>
                        <A.Location>
                          {el.crewBoard.mountain || "선택안함"}
                        </A.Location>
                      </A.ListLocationBox>
                      <A.ListTimeAndDayBox>
                        <A.Day>{el.crewBoard.date}</A.Day>
                        <A.TimePartition></A.TimePartition>
                        <A.Time>{el.crewBoard.dateTime}</A.Time>
                      </A.ListTimeAndDayBox>
                    </A.ListFooter>
                  </A.ListContainer>
                </A.ListBox>
              </Link>
            );
          })}
        </S.PickedListContainer>
        {Number(data?.fetchDibs.length) < visible ? null : (
          <S.MoreBtn onClick={onClickMore}>더 보기</S.MoreBtn>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default PickedListUi;
