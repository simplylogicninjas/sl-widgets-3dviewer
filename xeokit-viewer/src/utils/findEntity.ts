import { IViewer } from "../interfaces/xeokit.interface";

export function findEntity(viewer: IViewer, coords: any) {
    const pickResult = viewer.scene.pick({
        canvasPos: coords
    });

    if (!pickResult) {
        return;
    }

    const { entity } = pickResult;

    return entity;
}
