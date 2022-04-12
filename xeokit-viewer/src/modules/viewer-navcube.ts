import { NavCubePlugin } from "xeokit-sdk/src/plugins/NavCubePlugin";
import { NavCubeConfig } from "../interfaces/viewer-navcube";

import { IViewer } from "../interfaces/xeokit.interface";

export class NavCubeModule {
    private viewer: IViewer;

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    init(config: NavCubeConfig) {
        new NavCubePlugin(this.viewer, {
            visible: true,
            cameraFly: true,
            cameraFitFov: 45,
            cameraFlyDuration: 0.5,
            ...config
        });
    }
}
