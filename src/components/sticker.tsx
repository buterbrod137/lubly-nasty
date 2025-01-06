import Image from "next/image";
import clsx from "clsx";
import React from "react";

interface IStickerProps {
  src: string;
  width?: number;
  height?: number;
  rotate?: number;
  mleft?: number;
  ptop?: number;
  pleft?: number;
  pbottom?: number;
  borderRadius?: number;
  zIndex?: number;
}

export default function Sticker({
  src,
  width = 220,
  height = 220,
  rotate = 0,
  mleft = 0,
  ptop = 0,
  pbottom = 0,
  pleft = 0,
  borderRadius = 0,
  zIndex = -2,
}: IStickerProps) {
  const stickerClass = clsx(
    "absolute",
    "flex",
    "sticker",
    "overflow-hidden",
    `w-[${width}px]`,
    `h-[${height}px]`,
    );

  const styles: React.CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    width: `auto`,
    height: `auto`,
    marginLeft: `${mleft}px`,
    paddingTop: `${ptop}px`,
    paddingBottom: `${pbottom}px`,
    paddingLeft: `${pleft}px`,
    borderRadius: `${borderRadius}px`,
    zIndex,
  };

  return (
    <div className={stickerClass} style={styles}>
      <Image
        src={src}
        alt="Sticker Image"
        width={width}
        height={height}
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
    </div>
  );
}
