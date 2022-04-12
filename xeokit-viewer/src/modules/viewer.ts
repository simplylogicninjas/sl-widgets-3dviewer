import { Viewer } from "xeokit-sdk/src/viewer/Viewer";

import { IViewer } from "../interfaces/xeokit.interface";
import { InteractionsModule } from "./viewer-interactions";
import { ViewerMaterial } from "../interfaces/viewer-material.interface";
import { setMaterial } from "../utils/setMaterial";
import { ObjectsModule } from "./viewer-objects";
import { ModelModule } from "./viewer-model";
import { MeasurementModule } from "./viewer-measurement";
import { NavCubeModule } from "./viewer-navcube";
import { CameraModule } from "./viewer-camera";
import { AnnotationsModule } from "./viewer-annotations";
import { TreeViewModule } from "./viewer-treeview";
import { ApiModule } from "./viewer-api";
import { ExplodeModule } from "./viewer.explode";
import { ZoomModule } from "./viewer-zoom";

export default class XeokitViewerModule {
    name: string;
    viewer: IViewer;
    modelModule: ModelModule;
    interactionsModule: InteractionsModule;
    objectsModule: ObjectsModule;
    measurementModule: MeasurementModule;
    navCubeModule: NavCubeModule;
    cameraModule: CameraModule;
    annotationsModule: AnnotationsModule;
    treeViewModule: TreeViewModule;
    explodeModule: ExplodeModule;
    zoomModule: ZoomModule;
    apiModule: ApiModule;

    constructor(name: string) {
        this.initViewer(name);
    }

    destroy() {
        this.apiModule.unregisterApi();
        this.cameraModule.destroy();
        this.viewer.destroy();
    }

    setHighlightMaterial(material: ViewerMaterial) {
        setMaterial(this.viewer.scene.highlightMaterial, material);
    }

    setXrayMaterial(material: ViewerMaterial) {
        setMaterial(this.viewer.scene.xrayMaterial, material);
    }

    private initViewer(name: string) {
        this.name = name;
        this.viewer = new Viewer({
            canvasId: name,
            transparent: true,
            entityOffsetsEnabled: true,
            origin: [0, 0, 1]
        });

        this.modelModule = new ModelModule(this.viewer);
        this.interactionsModule = new InteractionsModule(this.viewer);
        this.objectsModule = new ObjectsModule(this.viewer, this.interactionsModule);
        this.measurementModule = new MeasurementModule(this.viewer, this.name);
        this.navCubeModule = new NavCubeModule(this.viewer);
        this.cameraModule = new CameraModule(this.viewer);
        this.annotationsModule = new AnnotationsModule(this.viewer);
        this.treeViewModule = new TreeViewModule(this.viewer);
        this.explodeModule = new ExplodeModule(this.viewer);
        this.zoomModule = new ZoomModule(this.viewer);
        this.apiModule = new ApiModule(this);
    }
}
