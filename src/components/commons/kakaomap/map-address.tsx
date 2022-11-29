/* eslint-disable */

import styled from "@emotion/styled";
import { useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  kakao: any;
};

const CrewMapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface IProps {
  data?: Pick<IQuery, "fetchCrewBoard">;
}

const CrewMap = (props: IProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${process.env.API_KEY}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("crewMap"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.5445755, 127.0559695), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchCrewBoard.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              map.setCenter(coords);
            }
          }
        );
      });
    };
  });

  return (
    <>
      <CrewMapWrapper id="crewMap"></CrewMapWrapper>
    </>
  );
};

export default CrewMap;
