import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Mapbox, { MapView } from "@rnmapbox/maps";
import Constants from "expo-constants";

const mapboxToken = Constants.expoConfig.extra.MAPBOX_PUBLIC_TOKEN;
Mapbox.setAccessToken(mapboxToken);

export default function Map({location}) {
  useEffect(() => {
    Mapbox.setTelemetryEnabled(false);
  }, []);

  return (
  
  <MapView style={styles.map} logoEnabled={false}
  attributionEnabled={false} 
  scaleBarEnabled={false} />
  )
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
