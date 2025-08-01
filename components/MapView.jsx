import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Mapbox from "@rnmapbox/maps";
import Constants from "expo-constants";
import { useLocation } from "../context/locationContext";

const mapboxToken = Constants.expoConfig.extra.MAPBOX_PUBLIC_TOKEN;
Mapbox.setAccessToken(mapboxToken);

export default function Map() {
  const { location } = useLocation();

  // Define default coordinates (e.g., Buenos Aires) if location is not available
  const USER_COORDINATES = location?.coords
    ? [location.coords.longitude, location.coords.latitude]
    : [-58.3816, -34.6037];

  useEffect(() => {
    Mapbox.setTelemetryEnabled(false);
  }, []);

  console.log("ubicacion", location);

  return (
    <Mapbox.MapView
      style={styles.map}
      logoEnabled={false}
      attributionEnabled={false}
      scaleBarEnabled={false}
      styleURL="mapbox://styles/mapbox/streets-v12"
    >
      <Mapbox.Camera
        zoomLevel={14}
        centerCoordinate={USER_COORDINATES}
        animationMode="flyTo"
        animationDuration={1000}
      />
      {location?.coords && (
        <Mapbox.PointAnnotation
          id="user-location"
          coordinate={[location.coords.longitude, location.coords.latitude]}
        >
          {/* <AnnotationContent title={"this is a point annotation"} /> */}
        </Mapbox.PointAnnotation>
      )}
    </Mapbox.MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});