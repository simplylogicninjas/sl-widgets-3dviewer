import { IViewer } from "../interfaces/xeokit.interface";
import {math} from 'xeokit-sdk/src/viewer/scene/math/math.js';

export class ZoomModule {
    private viewer: IViewer;

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    zoomIn(amount: number) {
        /*
        // this.viewer.camera.zoom(amount);

        this.viewer.camera.eye = [
            this.viewer.camera.eye[0],
            this.viewer.camera.eye[1] + amount,
            this.viewer.camera.eye[2]
        ]
        */

        const eye = this.viewer.camera.eye;
        const look = this.viewer.camera.look;

        const vec = math.subVec3(eye, look, math.vec3());
        const lenLook = math.lenVec3(vec, math.vec3());
        const newLenLook = lenLook + amount;
        const dir = math.normalizeVec3(vec, math.vec3());
        this.viewer.camera.eye = math.addVec3(look, math.mulVec3Scalar(dir, newLenLook), math.vec3());
    }
}