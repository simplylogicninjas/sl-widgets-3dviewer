import { ViewerInteraction } from "./viewer-interaction.interface";
import { ViewerMaterial } from "./viewer-material.interface";
import { ICamera } from "./xeokit.interface";

export interface XeokitViewerConfig {
    camera: ICamera;
    highlight?: {
        interactions: ViewerInteraction;
        material: ViewerMaterial;
    };
    xray?: {
        interaction: ViewerInteraction;
        material: ViewerMaterial;
    };
}
