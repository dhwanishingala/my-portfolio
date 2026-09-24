import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F2EA",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            background: "#B8452A",
            boxShadow: "4px 4px 0 #7EB8DA",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
