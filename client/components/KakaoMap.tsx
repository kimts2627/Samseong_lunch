import React, { useEffect } from 'react';
declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {

  const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&libraries=services,clusterer,drawing&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new window.kakao.maps.LatLng(37.506502, 127.053617),
          level: 3
        };

        const map = new window.kakao.maps.Map(container, options);
      
      });
    };
  }, []);

  return <div id='Mymap' className='w-96 h-96'></div>
}

export default KakaoMap
