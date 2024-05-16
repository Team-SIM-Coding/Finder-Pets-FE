"use client";
import { useEffect } from "react";

interface Props {
  address: string;
  initialLevel?: number;
}

declare global {
  interface Window {
    kakao: Kakao;
  }
}

const KakaoMap = ({ address, initialLevel = 3 }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map") as HTMLDivElement;
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: initialLevel,
        };
        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        console.log(geocoder);
        geocoder.addressSearch(address, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(result);
            const coords = new window.kakao.maps.LatLng(
              parseFloat(result[0].y),
              parseFloat(result[0].x),
            );
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });
            map.setCenter(coords);
          } else {
            console.error("Geocoder failed due to: " + status);
          }
        });

        script.onerror = () => {
          console.error("Failed to load the Kakao Maps SDK.");
        };

        return () => {
          document.head.removeChild(script);
        };
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [address, initialLevel]);

  return <div id="map" style={{ width: "100%", height: "400px", marginBottom: "100px" }}></div>;
};

export default KakaoMap;
