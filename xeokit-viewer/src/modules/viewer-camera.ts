import { CameraNavMode, CameraPosition } from "../interfaces/viewer-camera";
import { IViewer } from "../interfaces/xeokit.interface";

export class CameraModule {
    hasCameraPosition = false;
    cameraPosition: CameraPosition;

    private viewer: IViewer;
    private objectIds: string[] = [];

    constructor(viewer: IViewer) {
        this.viewer = viewer;

        this.viewer.cameraControl.followPointer = true;
    }

    destroy() {
        this.hasCameraPosition = false;
        this.cameraPosition = null;
    }

    getCameraPosition(): CameraPosition {
        const { eye, look, up } = this.viewer.camera;
        return {
            eye,
            look,
            up
        };
    }

    setCameraPosition({ eye, look, up }: CameraPosition) {
        this.viewer.cameraFlight.flyTo({
            eye,
            look,
            up
        });

        this.hasCameraPosition = true;
        this.cameraPosition = { eye, look, up };
    }

    setCameraNavMode(navMode: CameraNavMode) {
        this.viewer.cameraControl.navMode = navMode;
    }

    flyTo() {
        /* eslint-disable no-unused-expressions */
        this.objectIds.length ? this.flyToObjects(this.objectIds) : this.flyToScene();
    }

    flyToScene() {
        this.viewer.cameraFlight.flyTo(this.viewer.scene);
    }

    flyToObjects(objectIds: string[]) {
        this.objectIds = [...objectIds];
        this.viewer.cameraFlight.flyTo({
            aabb: this.viewer.scene.getAABB(objectIds),
            duration: 0.5,
            fitFOV: 45
        });
    }
}
