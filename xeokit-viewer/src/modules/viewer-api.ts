import { HierarchyType, XeokitViewerModule } from "..";
import { AnnotationItem } from "../interfaces/viewer-annotation";
import { CameraNavMode, CameraPosition } from "../interfaces/viewer-camera";
import { ViewerInteraction } from "../interfaces/viewer-interaction.interface";
import { ViewerMaterial } from "../interfaces/viewer-material.interface";
import { NavCubeConfig } from "../interfaces/viewer-navcube";

declare let window;

export class ApiModule {
    private viewerName: string;
    private viewerModule: XeokitViewerModule;

    constructor(viewerModule: XeokitViewerModule) {
        this.viewerName = viewerModule.name;
        this.viewerModule = viewerModule;
        this.initApi();
    }

    private initApi() {
        if (!window.viewerApi) {
            window.viewerApi = {};
        }

        window.viewerApi[this.viewerName] = {};

        this.registerSetHighlightInteraction();
        this.registerSetHighlightMaterial();
        this.registerHighlightObjects();
        this.registerSetXrayInteraction();
        this.registerSetXrayMaterial();
        this.registerXrayObjects();
        this.registerSetMeasurementType();
        this.registerInitTreeView();
        this.registerSetTreeViewHierarchy();
        this.registerRestoreObjects();
        this.registerCreateAnnotation();
        this.registerAnnotationClick();
        this.registerAnnotationHover();
        this.registerNavCube();
        this.registerCameraGetPosition();
        this.registerCameraSetPosition();
        this.registerCameraSetNavMode();
        this.registerExplode();
        this.registerZoomIn();
        this.registerColorObjects();
    }

    unregisterApi() {
        delete window.viewerApi[this.viewerName];
    }

    private register(name: string, fn: Function) {
        window.viewerApi[this.viewerName][name] = fn;
    }

    private registerSetHighlightInteraction() {
        this.register("setHighlightInteraction", (interaction: ViewerInteraction) => {
            this.viewerModule.interactionsModule.setHighlightInteraction(interaction);
        });
    }

    private registerSetHighlightMaterial() {
        this.register("setHighlightMaterial", (material: ViewerMaterial) => {
            this.viewerModule.setHighlightMaterial(material);
        });
    }

    private registerHighlightObjects() {
        this.register("highlightObjects", (objectIds: string[]) => {
            this.viewerModule.objectsModule.highlightObjects(objectIds);
        });
    }

    private registerSetXrayInteraction() {
        this.register("setXrayInteraction", (interaction: ViewerInteraction) => {
            this.viewerModule.interactionsModule.setXrayInteraction(interaction);
        });
    }

    private registerSetXrayMaterial() {
        this.register("setXrayMaterial", (material: ViewerMaterial) => {
            this.viewerModule.setXrayMaterial(material);
        });
    }

    private registerXrayObjects() {
        this.register("xrayObjects", (objectIds: string[]) => {
            this.viewerModule.objectsModule.xrayObjects(objectIds);
        });
    }

    private registerSetMeasurementType() {
        this.register("setMeasurementType", (type: "distance" | "angle" | "off") => {
            this.viewerModule.measurementModule.enable(type);
        });
    }

    private registerInitTreeView() {
        this.register("initTreeView", (treeViewContainerId: string) => {
            this.viewerModule.treeViewModule.init(treeViewContainerId);
        });
    }

    private registerSetTreeViewHierarchy() {
        this.register("setTreeViewHierarchy", (type: HierarchyType) => {
            this.viewerModule.treeViewModule.setHierarchy(type);
        });
    }

    private registerRestoreObjects() {
        this.register("restoreObjects", () => {
            this.viewerModule.objectsModule.restoreSceneObjects();
            this.viewerModule.measurementModule.clearPlugins();

            if (this.viewerModule.cameraModule.cameraPosition) {
                this.viewerModule.cameraModule.setCameraPosition(this.viewerModule.cameraModule.cameraPosition);
            } else {
                this.viewerModule.cameraModule.flyToScene();
            }
        });
    }

    private registerCreateAnnotation() {
        this.register("createAnnotation", (annotationItem: AnnotationItem) => {
            return this.viewerModule.annotationsModule.createAnnotation(annotationItem);
        });
    }

    private registerAnnotationClick() {
        this.register("enableAnnotationClick", () => {
            this.viewerModule.annotationsModule.enableMarkerClick();
        });
    }

    private registerAnnotationHover() {
        this.register("enableAnnotationHover", () => {
            this.viewerModule.annotationsModule.enableMarkerHover();
        });
    }

    private registerNavCube() {
        this.register("initNavCube", (config: NavCubeConfig) => {
            this.viewerModule.navCubeModule.init(config);
        });
    }

    private registerCameraGetPosition() {
        this.register("cameraGetPosition", (): CameraPosition => {
            return this.viewerModule.cameraModule.getCameraPosition();
        });
    }

    private registerCameraSetPosition() {
        this.register("cameraSetPosition", (position: CameraPosition) => {
            this.viewerModule.cameraModule.setCameraPosition(position);
        });
    }

    private registerCameraSetNavMode() {
        this.register("cameraSetNavMode", (navMode: CameraNavMode) => {
            this.viewerModule.cameraModule.setCameraNavMode(navMode);
        });
    }

    private registerExplode() {
        this.register("explode", (explode: { verticalExplode: number; horizontalExplode: number }) => {
            this.viewerModule.explodeModule.explode(explode.verticalExplode, explode.horizontalExplode);
        });
    }

    private registerZoomIn() {
        this.register("zoomIn", (zoom: {amount: number}) => {
            this.viewerModule.zoomModule.zoomIn(zoom.amount);
        });
    }

    private registerColorObjects() {
        this.register("colorObjects", (colorize: {
            objectIds: string[],
            hexColor: string
        }) => {
            this.viewerModule.objectsModule.colorObjects(colorize.objectIds, colorize.hexColor);
        });
    }
}
