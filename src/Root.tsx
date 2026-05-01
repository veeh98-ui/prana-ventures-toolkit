import React from "react";
import { Composition } from "remotion";
import { PranaSampleVideo } from "./compositions/PranaSampleVideo";

export function RemotionRoot() {
  return (
    <Composition
      id="PranaSampleVideo"
      component={PranaSampleVideo}
      durationInFrames={360}
      fps={30}
      width={1920}
      height={1080}
    />
  );
}
