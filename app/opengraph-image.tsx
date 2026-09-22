import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = "Bajriwala - Construction Materials. Delivered Right to Your Site.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAF9F6",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(20,22,26,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,22,26,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(245,179,1,0.28)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#F5B301",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#14161A",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              B
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#14161A" }}>Bajriwala</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div style={{ fontSize: 58, fontWeight: 800, color: "#14161A", lineHeight: 1.05 }}>
              Construction Materials.
            </div>
            <div style={{ fontSize: 58, fontWeight: 800, color: "#14161A", lineHeight: 1.05 }}>
              Delivered Right to Your Site.
            </div>
            <div style={{ marginTop: 24, fontSize: 24, color: "#5B6472" }}>
              Cement - RMC - Bricks - Sand - Aggregates
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              fontWeight: 600,
              color: "#14161A",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#1E9E57",
              }}
            />
            Now live on Google Play and the App Store · {siteConfig.brandName}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
