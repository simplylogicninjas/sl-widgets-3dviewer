import { ViewerMaterial } from "../interfaces/viewer-material.interface";
import { parseColorRgb } from "./parseColorRgb";

export function setMaterial(materialObject: any, material: ViewerMaterial) {
    const { fill, edges, fillAlpha, fillColor, edgesAlpha, edgesColor } = material;

    if (fill && edges) {
        materialObject.fill = fill;
        materialObject.edges = edges;
        materialObject.edgeWidth = 10;
    }

    if (fillAlpha) {
        materialObject.fillAlpha = fillAlpha;
    }

    if (fillColor) {
        materialObject.fillColor = parseColorRgb(fillColor);
    }

    if (edgesAlpha) {
        materialObject.edgeAlpha = edgesAlpha;
    }

    if (edgesColor) {
        materialObject.edgeColor = parseColorRgb(edgesColor);
    }
}
