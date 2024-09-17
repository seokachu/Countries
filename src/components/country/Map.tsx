import { GoogleMapProps } from "@/types";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "50vh",
};

function Map({ lat, lng }: GoogleMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setMapLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setMapLoaded(true);
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={5}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  );
}

export default Map;
