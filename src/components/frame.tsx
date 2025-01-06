import clsx from "clsx";
import React from "react";

interface IFrameProps {
    text: string;
    width?: number;
    height?: number;
    mleft?: number;
    mtop?: number;
    mbottom?: number;
    ptop?: number;
    pleft?: number;
    pright?: number;
    rotate?: number;
    pbottom?: number;
    borderRadius?: number;
    zIndex?: number;
    overflow?: "X" | "Y" | "none";

    textAlign?: "left" | "center" | "right"
    
    animateFrame?: boolean;
    animateBounce?: boolean;
}

export default function Frame({
    text,
    width = 0,
    height = 0,
    mleft = 0,
    mtop = 0,
    mbottom = 0,
    ptop = 0,
    pleft = 0,
    pright = 0,
    rotate = 0,
    pbottom = 0,
    borderRadius = 30,
    zIndex = 1,
    overflow = "X",

    textAlign = "left",

    animateFrame = true,
    animateBounce = false,
}: IFrameProps) {    

    const stickerClass = clsx(
        "flex",
        "absolute",
        `${animateFrame ? "frame" : "blackBg"}`,
        "frameBorder",
        `w-[${width}px]`,
        `h-[${height}px]`,
        overflow === "X" ? "overflow-x-scroll" : overflow === "Y" ? "overflow-y-scroll" : "overflow-hidden",
        animateBounce !? "animate-bounce" : undefined,
    );

    const styles: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        marginLeft: `${mleft}px`,
        marginTop: `${mtop}px`,
        marginBottom: `${mbottom}px`,
        paddingTop: `${ptop}px`,
        paddingLeft: `${pleft}px`,
        paddingRight: `${pright}px`,
        paddingBottom: `${pbottom}px`,
        borderRadius: `${borderRadius}px`,
        outline: `2px solid black`,
        zIndex,
        display: `inline-block`,
        overflowX: overflow === "X" ? "scroll" : "hidden",
        overflowY: overflow === "Y" ? "scroll" : "hidden",
        whiteSpace: overflow === "X" ? "nowrap" : undefined,
        rotate: `${rotate}deg`,
    };

    const textStyles: React.CSSProperties = {
        textAlign: textAlign,
    }

    return (
        <>
            <div className={stickerClass} style={styles}>
                <p
                    className="text" style={textStyles} 
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </>
    );
}
