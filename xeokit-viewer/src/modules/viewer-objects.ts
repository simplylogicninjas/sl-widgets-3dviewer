import { ObjectsMemento } from "xeokit-sdk/src/viewer/scene/mementos";

import { PickResultEvent } from "../interfaces/viewer-events";
import { IViewer } from "../interfaces/xeokit.interface";
import { parseColorRgb } from "../utils/parseColorRgb";
import { InteractionsModule } from "./viewer-interactions";

export class ObjectsModule {
    private viewer: IViewer;
    private interactionsModule: InteractionsModule;
    private objectsMemento: any;

    constructor(viewer: IViewer, interactionsModule: InteractionsModule) {
        this.viewer = viewer;
        this.interactionsModule = interactionsModule;
        this.objectsMemento = new ObjectsMemento();
    }

    saveSceneObjects() {
        this.objectsMemento.saveObjects(this.viewer.scene);
    }

    restoreSceneObjects() {
        this.viewer.scene.setObjectsHighlighted(this.viewer.scene.objectIds, false);
        this.viewer.scene.setObjectsXRayed(this.viewer.scene.objectIds, false);
    }

    onObjectPicked(listener: (event: PickResultEvent) => void) {
        this.viewer.cameraControl.on("picked", listener);
    }

    showAllObjects() {
        this.viewer.scene.setObjectsVisible(this.viewer.scene.objectIds, true);
    }

    hideAllObjects() {
        this.viewer.scene.setObjectsVisible(this.viewer.scene.objectIds, false);
    }

    showObjects(objectIds: string[], flyTo = true) {
        this.viewer.scene.setObjectsVisible(this.viewer.scene.objectIds, false);
        this.viewer.scene.setObjectsVisible(objectIds, true);

        if (flyTo) {
            this.viewer.cameraFlight.flyTo({
                aabb: this.viewer.scene.getAABB(objectIds),
                duration: 0.5,
                fitFOV: 30
            });
        }
    }

    highlightObjects(objectIds: string[]) {
        if (this.interactionsModule) {
            this.interactionsModule.updateHighlightDatasource(objectIds);
        }

        this.viewer.scene.setObjectsHighlighted(this.viewer.scene.objectIds, false);
        this.viewer.scene.setObjectsHighlighted(objectIds, true);
    }

    xrayObjects(objectIds: string[]) {
        if (this.interactionsModule) {
            this.interactionsModule.updateXrayDatasource(objectIds);
        }

        this.viewer.scene.setObjectsXRayed(this.viewer.scene.objectIds, false);
        this.viewer.scene.setObjectsXRayed(objectIds, true);
    }

    colorObjects(objectIds: string[], hexColor: string) {
        const rgbColor = parseColorRgb(hexColor);

        this.viewer.scene.setObjectsColorized(objectIds, rgbColor);
    }
}
