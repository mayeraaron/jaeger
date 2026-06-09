import { ImageResponse } from "next/og";

export const alt = "Jäger GmbH – Reinigungstechnik, Baumaschinen & Mietpark in Klaus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Yellow decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(255, 220, 2, 0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            right: "180px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(255, 220, 2, 0.12)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "110px",
            fontWeight: "900",
            color: "#18181b",
            lineHeight: "1",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          JÄGER GmbH
        </div>

        {/* Yellow accent bar */}
        <div
          style={{
            width: "100px",
            height: "7px",
            background: "#ffdc02",
            marginTop: "28px",
            marginBottom: "28px",
            borderRadius: "2px",
          }}
        />

        {/* Services */}
        <div
          style={{
            fontSize: "30px",
            color: "#52525b",
            fontWeight: "400",
            display: "flex",
          }}
        >
          Reinigungstechnik · Strahltechnik · Baumaschinen & Mietpark
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: "24px",
            color: "#71717a",
            marginTop: "14px",
            display: "flex",
          }}
        >
          Klaus, Vorarlberg · Österreich
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            right: "80px",
            fontSize: "22px",
            color: "#a1a1aa",
            fontWeight: "500",
            display: "flex",
          }}
        >
          jaeger.at
        </div>
      </div>
    ),
    { ...size },
  );
}
