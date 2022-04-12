import hexRgb from "hex-rgb";

export const parseColorRgb = (color: string) => {
    return hexRgb(color, { format: "array" })
        .slice(0, -1)
        .map(it => {
            return it / 255;
        });
};
