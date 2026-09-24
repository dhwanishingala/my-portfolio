import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
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
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #F7F2EA 0%, #E6F2FA 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            background: "#B8452A",
            marginBottom: 40,
            boxShadow: "8px 8px 0 #7EB8DA",
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#2C2825",
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 32, color: "#6B6560", marginTop: 16 }}>
          {site.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
