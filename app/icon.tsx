import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5B301",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 96,
        }}
      >
        <div
          style={{
            fontSize: 280,
            fontWeight: 800,
            color: "#14161A",
            letterSpacing: -12,
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size },
  );
}
