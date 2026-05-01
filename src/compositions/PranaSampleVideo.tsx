import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BRAND_GREEN = "#2D6A4F";
const BRAND_LIGHT = "#95D5B2";
const BRAND_CREAM = "#F8F4E3";
const BRAND_DARK = "#1B1B2F";

function LogoSlide() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({ frame, fps, config: { damping: 20 }, durationInFrames: 40 });
  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 80 }, durationInFrames: 50 });
  const lineWidth = interpolate(frame, [20, 60], [0, 300], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${BRAND_DARK} 0%, #2a3a2a 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `4px solid ${BRAND_LIGHT}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 52, color: BRAND_LIGHT, fontFamily: "serif" }}>
            ✦
          </span>
        </div>
        <h1
          style={{
            color: BRAND_CREAM,
            fontSize: 72,
            fontFamily: "Georgia, serif",
            letterSpacing: 10,
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          PRANA
        </h1>
        <div
          style={{
            width: lineWidth,
            height: 2,
            background: BRAND_LIGHT,
          }}
        />
        <p
          style={{
            color: BRAND_LIGHT,
            fontSize: 22,
            fontFamily: "Georgia, serif",
            letterSpacing: 4,
            margin: 0,
            opacity: interpolate(frame, [50, 80], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          TRAINING STUDIO
        </p>
      </div>
    </AbsoluteFill>
  );
}

function TaglineSlide() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = ["Fuerza.", "Equilibrio.", "Transformación."];
  return (
    <AbsoluteFill
      style={{
        background: BRAND_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      {words.map((word, i) => {
        const startFrame = i * 20;
        const opacity = spring({
          frame: frame - startFrame,
          fps,
          config: { damping: 20 },
          durationInFrames: 30,
        });
        const translateY = interpolate(
          frame - startFrame,
          [0, 30],
          [30, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        return (
          <p
            key={word}
            style={{
              color: BRAND_GREEN,
              fontSize: 58,
              fontFamily: "Georgia, serif",
              margin: 0,
              opacity,
              transform: `translateY(${translateY}px)`,
              letterSpacing: 4,
            }}
          >
            {word}
          </p>
        );
      })}
    </AbsoluteFill>
  );
}

function UmbralSlide() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({ frame, fps, config: { damping: 25 }, durationInFrames: 40 });
  const dotScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 100 },
    durationInFrames: 35,
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, #0f1f12 0%, ${BRAND_GREEN} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <div style={{ opacity, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: BRAND_LIGHT,
                transform: `scale(${interpolate(dotScale, [0, 1], [0, 1], {}) })`,
                opacity: interpolate(frame - 30 - i * 8, [0, 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            />
          ))}
        </div>
        <h2
          style={{
            color: BRAND_CREAM,
            fontSize: 60,
            fontFamily: "Georgia, serif",
            letterSpacing: 8,
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Umbral Natural
        </h2>
        <p
          style={{
            color: BRAND_LIGHT,
            fontSize: 24,
            fontFamily: "Georgia, serif",
            letterSpacing: 2,
            margin: 0,
            opacity: interpolate(frame, [50, 75], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Nutrición · Bienestar · Naturaleza
        </p>
      </div>
    </AbsoluteFill>
  );
}

function OutroSlide() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({ frame, fps, config: { damping: 20 }, durationInFrames: 45 });
  const pulse = Math.sin(frame / 15) * 0.06 + 1;

  return (
    <AbsoluteFill
      style={{
        background: BRAND_DARK,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }}
    >
      <div style={{ opacity, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: BRAND_GREEN,
            transform: `scale(${pulse})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 36, color: BRAND_CREAM }}>✦</span>
        </div>
        <h1
          style={{
            color: BRAND_CREAM,
            fontSize: 52,
            fontFamily: "Georgia, serif",
            letterSpacing: 6,
            margin: 0,
          }}
        >
          PRANA VENTURES
        </h1>
        <p
          style={{
            color: BRAND_LIGHT,
            fontSize: 20,
            fontFamily: "Georgia, serif",
            letterSpacing: 3,
            margin: 0,
            textAlign: "center",
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Herramientas integradas para negocios, coaching y contenido
        </p>
        <div
          style={{
            marginTop: 16,
            padding: "12px 36px",
            border: `2px solid ${BRAND_LIGHT}`,
            color: BRAND_LIGHT,
            fontSize: 18,
            fontFamily: "Georgia, serif",
            letterSpacing: 3,
            opacity: interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          @pranaventuresstudio
        </div>
      </div>
    </AbsoluteFill>
  );
}

export function PranaSampleVideo() {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const SLIDE_DURATION = Math.floor(durationInFrames / 4);

  const slideIndex = Math.min(Math.floor(frame / SLIDE_DURATION), 3);
  const slideFrame = frame - slideIndex * SLIDE_DURATION;

  const transitionProgress = interpolate(
    slideFrame,
    [SLIDE_DURATION - 15, SLIDE_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const slides = [LogoSlide, TaglineSlide, UmbralSlide, OutroSlide];
  const CurrentSlide = slides[slideIndex];
  const NextSlide = slides[Math.min(slideIndex + 1, slides.length - 1)];

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: transitionProgress }}>
        {React.createElement(CurrentSlide)}
      </AbsoluteFill>
      {slideFrame > SLIDE_DURATION - 15 && slideIndex < slides.length - 1 && (
        <AbsoluteFill
          style={{ opacity: 1 - transitionProgress }}
        >
          {React.createElement(NextSlide)}
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
}
