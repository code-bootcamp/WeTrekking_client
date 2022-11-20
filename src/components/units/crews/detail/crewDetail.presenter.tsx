import { Avatar } from "@mui/material";
import DOMPurify from "dompurify";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../store";
import CrewMap from "../../../commons/kakaomap/map-address";
import ConfirmModal from "../../../commons/modals/confirmModal";
import PickFalseSvg from "../../../commons/svg/pickFalse";
import PickTrueSvg from "../../../commons/svg/pickTrue";
import CrewCommentList from "../../crewComment/list/crewCommentList.container";
import CrewCommentWrite from "../../crewComment/write/crewCommentWrite.container";
import * as S from "./crewDetail.styles";
import { ICrewDetailUiProps } from "./crewDetail.types";
import { v4 as uuidv4 } from "uuid";
import { getAge } from "../../../../commons/utils/getAge";
import RouteModal from "../../../commons/modals/routeModal";

const CrewDetailUi = ({
  data,
  comments,
  onLoadMore,
  crewImg,
  onClickEdit,
  boardId,
  userId,
  onClickList,
  onClickShowModal,
  onClickCancelModal,
  onClickModalConfirm,
  isModalOpen,
  onClickLogin,
  onClickPick,
  isDib,
  onClickToChat,
  onClickApply,
  acceptedList,
  onClickRoute,
  isRouteModalOpen,
}: ICrewDetailUiProps) => {
  const [accessToken] = useRecoilState(accessTokenState);
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.ImgBox>
            <S.MainImg
              style={{
                backgroundImage: `url(https://storage.googleapis.com/${String(
                  crewImg?.fetchBoardImage[0]?.imgUrl
                ).replace(" ", "20%")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></S.MainImg>
            <S.SubImgBox>
              <S.SubImg
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${String(
                    crewImg?.fetchBoardImage[1]?.imgUrl
                  ).replace(" ", "20%")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></S.SubImg>
              <S.SubImg
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${String(
                    crewImg?.fetchBoardImage[2]?.imgUrl
                  ).replace(" ", "20%")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></S.SubImg>
              <S.SubImg
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${String(
                    crewImg?.fetchBoardImage[3]?.imgUrl
                  ).replace(" ", "20%")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
          <S.InformBox>
            <S.LocationToProfile>
              <S.LocationPickBox>
                <S.LocationTitleBox>
                  <S.LocationBox>
                    <S.LocationImg
                      src="/images/detail/location.png"
                      alt="gps"
                    />
                    <S.Location>
                      {data?.fetchCrewBoard.mountain.mountain}
                    </S.Location>
                  </S.LocationBox>
                  <S.Title>{data?.fetchCrewBoard.title}</S.Title>
                </S.LocationTitleBox>
                <S.PickChatContainer>
                  {acceptedList?.fetchAcceptedList
                    .map((el) => el.user.id)
                    .includes(String(userId)) ? (
                    <S.PickChatBox onClick={onClickToChat}>
                      <S.ChatBox></S.ChatBox>
                    </S.PickChatBox>
                  ) : (
                    <></>
                  )}
                  <S.PickChatBox onClick={onClickRoute}>
                    <S.RouteBox></S.RouteBox>
                  </S.PickChatBox>

                  <S.PickChatBox>
                    <S.PickBox onClick={onClickPick}>
                      {Number(isDib) >= 1 ? <PickTrueSvg /> : <PickFalseSvg />}
                    </S.PickBox>
                  </S.PickChatBox>
                </S.PickChatContainer>
              </S.LocationPickBox>
              <S.ProfileBox>
                <S.ProfileImg
                  style={{
                    backgroundImage: `url(https://storage.googleapis.com/${String(
                      data?.fetchCrewBoard.user.profile_img
                    )})`,
                  }}
                ></S.ProfileImg>
                <S.ProfileInform>
                  <S.NickName>{data?.fetchCrewBoard.user.nickname}</S.NickName>
                  <S.AgeGenderBox>
                    <S.AgeGender>
                      {getAge(String(data?.fetchCrewBoard.user.birth))}
                    </S.AgeGender>
                    <S.AgeGender>·</S.AgeGender>
                    <S.AgeGender>
                      {data?.fetchCrewBoard.gender
                        .replace("female", "여성")
                        .replace("male", "남성")}
                    </S.AgeGender>
                  </S.AgeGenderBox>
                </S.ProfileInform>
              </S.ProfileBox>
            </S.LocationToProfile>
            <S.UnderLine></S.UnderLine>
            <S.DetailInformBox>
              <S.DetailInform>
                <S.DetailTitle>등산 날짜</S.DetailTitle>
                <S.DetailData>{data?.fetchCrewBoard.date}</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>등산 시간</S.DetailTitle>
                <S.DetailData>
                  {data?.fetchCrewBoard.dateTime
                    .replace("am", "AM")
                    .replace("pm", "PM")}
                </S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 성별</S.DetailTitle>
                <S.DetailData>
                  {data?.fetchCrewBoard.gender
                    .replace("female", "여자만")
                    .replace("male", "남자만")
                    .replace("any", "상관없음")}
                </S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 인원</S.DetailTitle>
                <S.DetailData>{data?.fetchCrewBoard.peoples}명</S.DetailData>
              </S.DetailInform>
              {/* <S.Line></S.Line>
              <S.DetailInform>
                <S.TrailBtn>등산로 보기</S.TrailBtn>
              </S.DetailInform> */}
            </S.DetailInformBox>
            <S.DueBox>
              <S.DueText>회비</S.DueText>
              <S.DueData>{`${String(data?.fetchCrewBoard.dues).replace(
                /(\d)(?=(?:\d{3})+(?!\d))/g,
                "$1,"
              )}`}</S.DueData>
              <S.DueWon>원</S.DueWon>
            </S.DueBox>
            {typeof window !== "undefined" ? (
              <S.Description
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    String(data?.fetchCrewBoard.description)
                  ),
                }}
              ></S.Description>
            ) : (
              <S.Description></S.Description>
            )}
          </S.InformBox>
        </S.Header>
        <S.MiddleUnderLine></S.MiddleUnderLine>
        <S.Body>
          <S.MapBox>
            <S.BodyTitle>모임장소</S.BodyTitle>
            <S.Map>
              <CrewMap data={data} />
            </S.Map>
            <S.AddressBox>
              <S.Address>{data?.fetchCrewBoard.address}</S.Address>
              <S.Address>{data?.fetchCrewBoard.addressDetail}</S.Address>
            </S.AddressBox>
          </S.MapBox>
          <S.ListBox>
            <S.ResponsiveUnderLine></S.ResponsiveUnderLine>
            <S.ListInform>
              <S.BodyTitle>참가자 리스트</S.BodyTitle>
              <S.CrewListBox>
                {console.log(acceptedList)}
                <S.CrewList>
                  {acceptedList?.fetchAcceptedList.length}
                </S.CrewList>
                <S.CrewListAll>/{data?.fetchCrewBoard.peoples}</S.CrewListAll>
                <S.Img
                  src="/images/detail/profile-detail.png"
                  alt="프로필상세"
                />
              </S.CrewListBox>
            </S.ListInform>
            <S.CrewContainer>
              <S.CrewBox
                style={{ filter: !accessToken ? "blur(10px)" : "none" }}
              >
                <S.CrewInformBox>
                  <S.CrewInform>
                    <Avatar
                      alt="Crew Image"
                      src={`https://storage.googleapis.com/${String(
                        data?.fetchCrewBoard.user.profile_img
                      )}`}
                      className="avatar"
                    ></Avatar>
                    <S.CrewPositionNickName>
                      <S.CrewPosition>방장</S.CrewPosition>
                      <S.CrewNickName>
                        {data?.fetchCrewBoard.user.nickname}
                      </S.CrewNickName>
                    </S.CrewPositionNickName>
                  </S.CrewInform>
                  <S.CrewAgeGenderBox>
                    <S.CrewAgeGender>
                      {getAge(String(data?.fetchCrewBoard.user.birth))}
                    </S.CrewAgeGender>
                    <S.CrewAgeGender>·</S.CrewAgeGender>
                    <S.CrewAgeGender>
                      {data?.fetchCrewBoard.user.gender
                        .replace("male", "남성")
                        .replace("female", "여성")}
                    </S.CrewAgeGender>
                  </S.CrewAgeGenderBox>
                </S.CrewInformBox>
                {acceptedList?.fetchAcceptedList.map((acceptMap) =>
                  boardId !== acceptMap.user.id ? (
                    <S.CrewInformBox key={acceptMap.id}>
                      <S.CrewInform>
                        <Avatar
                          alt="Crew Image"
                          src={`https://storage.googleapis.com/${String(
                            acceptMap.user.profile_img
                          )}`}
                          className="avatar"
                        ></Avatar>
                        <S.CrewPositionNickName>
                          <S.CrewNickName>
                            {acceptMap.user.nickname}
                          </S.CrewNickName>
                        </S.CrewPositionNickName>
                      </S.CrewInform>
                      <S.CrewAgeGenderBox>
                        <S.CrewAgeGender>
                          {getAge(acceptMap.user.birth)}
                        </S.CrewAgeGender>
                        <S.CrewAgeGender>·</S.CrewAgeGender>
                        <S.CrewAgeGender>
                          {acceptMap.user.gender
                            .replace("male", "남성")
                            .replace("female", "여성")}
                        </S.CrewAgeGender>
                      </S.CrewAgeGenderBox>
                    </S.CrewInformBox>
                  ) : (
                    <></>
                  )
                )}
              </S.CrewBox>
              {!accessToken && (
                <S.CrewLoginCheckBox>
                  <S.CrewLoginText>참가자 리스트는</S.CrewLoginText>
                  <S.CrewLoginText>
                    로그인 하셔야 볼 수 있습니다.
                  </S.CrewLoginText>
                  <S.CrewLoginBtn onClick={onClickLogin}>로그인</S.CrewLoginBtn>
                </S.CrewLoginCheckBox>
              )}
            </S.CrewContainer>
          </S.ListBox>
        </S.Body>
        <S.Footer>
          <S.ListBtn onClick={onClickList}>목록</S.ListBtn>
          {userId === boardId ? (
            <>
              <S.ApplyBtn onClick={onClickEdit}>수정</S.ApplyBtn>
              <S.ApplyBtn onClick={onClickShowModal}>삭제</S.ApplyBtn>
            </>
          ) : (
            <S.ApplyBtn onClick={onClickApply}>참가신청</S.ApplyBtn>
          )}
        </S.Footer>
        <S.MiddleUnderLine></S.MiddleUnderLine>
        <S.CommentContainer>
          <CrewCommentWrite />
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true || false}
          >
            {comments?.fetchCrewComments.map((commentsMap) => {
              return (
                <CrewCommentList commentsMap={commentsMap} key={uuidv4()} />
              );
            })}
          </InfiniteScroll>
        </S.CommentContainer>
        <ConfirmModal
          onOk={onClickModalConfirm}
          onCancel={onClickCancelModal}
          contents="게시글을 삭제하시겠습니까?"
          open={isModalOpen}
        />
        {isRouteModalOpen && (
          <RouteModal
            mountain={String(data?.fetchCrewBoard.mountain.mountain)}
            address={String(data?.fetchCrewBoard.mountain.address)}
          />
        )}
      </S.Wrapper>
    </>
  );
};

export default CrewDetailUi;
