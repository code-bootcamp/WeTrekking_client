import ChatUi from "./chat.presenter";
import io from "socket.io-client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";
import { userInfo } from "../../../store";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { FETCH_CREW_BOARD } from "../crews/detail/crewDetail.queries";

const FETCH_LOGS = gql`
  query fetchLogs($roomName: String!) {
    fetchLogs(roomName: $roomName) {
      name
      roomName
      message
    }
  }
`;

const FETCH_CHAT_USER = gql`
  query fetchChatUsers($boardId: String!) {
    fetchChatUsers(boardId: $boardId) {
      id
      status
      user {
        id
        name
        birth
        gender
        profile_img
      }
    }
  }
`;

const Chat = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [chatMsg, setChatMsg] = useState("");

  const router = useRouter();

  const name = userDatas?.fetchUser.name;
  const room = router.query.crewId;
  const boardId = router.query.crewId;

  const socket = io("https://develop.wetrekking.kr/wetrekkingchat", {
    transports: ["websocket"],
  });

  const { data, refetch } = useQuery(FETCH_LOGS, {
    variables: {
      roomName: router.query.crewId,
    },
  });

  const { data: crewDetail } = useQuery(FETCH_CREW_BOARD, {
    variables: {
      crewBoardId: router.query.crewId,
    },
  });

  const { data: crewUsers, refetch: crewUserRefetch } = useQuery(
    FETCH_CHAT_USER,
    {
      variables: {
        boardId: router.query.crewId,
      },
    }
  );

  useEffect(() => {
    void crewUserRefetch();
  }, [crewUsers]);

  useEffect(() => {
    void refetch();
  }, [data]);

  const chatInput = useRef<HTMLInputElement>(null);

  const getDebounce = _.debounce((value) => {
    setChatMsg(value);
  }, 200);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  socket.emit("join", name, room, boardId);

  const onClickSendBtn = () => {
    if (chatMsg) {
      socket.emit("send-chat", room, name, chatMsg);
      void refetch();
      setChatMsg("");
      // @ts-expect-error
      chatInput.current?.value = "";
    }
  };

  return (
    <>
      <ChatUi
        onChangeInput={onChangeInput}
        onClickSendBtn={onClickSendBtn}
        data={data}
        chatInput={chatInput}
        crewDetail={crewDetail}
        crewUsers={crewUsers}
      />
    </>
  );
};

export default Chat;
