import { IViewer } from "../interfaces/xeokit.interface";

interface ObjectCenter {
    id: string;
    center: number[];
}

export class ExplodeModule {
    private viewer: IViewer;
    private sceneCenter: number[];
    private sceneObjectsCenter: ObjectCenter[];

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    explode(verticalExplode: number, horizontalExplode: number) {
        if (!this.sceneCenter && !this.sceneObjectsCenter) {
            this.init();
        }

        const vCoef = 5 * verticalExplode;
        const hCoef = 4 * horizontalExplode;

        this.sceneObjectsCenter.forEach(object => {
            const translation = [
                (object.center[0] - this.sceneCenter[0]) * hCoef,
                (object.center[1] - this.sceneCenter[1]) * vCoef,
                (object.center[2] - this.sceneCenter[2]) * hCoef
            ];

            this.viewer.scene.setObjectsOffset([object.id], translation);
        });
    }

    init() {
        const aabb = this.viewer.scene.getAABB();

        this.sceneCenter = [(aabb[0] + aabb[3]) / 2, (aabb[1] + aabb[4]) / 2, (aabb[2] + aabb[5]) / 2];

        this.sceneObjectsCenter = Object.keys(this.viewer.metaScene.metaObjects).map(objectId => {
            const aabb = this.viewer.scene.getAABB([objectId]);

            return {
                id: objectId,
                center: [(aabb[0] + aabb[3]) / 2, (aabb[1] + aabb[4]) / 2, (aabb[2] + aabb[5]) / 2]
            };
        });
    }
}
