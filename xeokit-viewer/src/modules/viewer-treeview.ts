import { TreeViewPlugin } from "xeokit-sdk/src/plugins/TreeViewPlugin";
import { IViewer } from "../interfaces/xeokit.interface";
import { HierarchyType } from "../types/treeview";

export class TreeViewModule {
    private viewer: IViewer;
    private treeViewPlugin: any;

    private modelLoadedEvent: any;
    private modelUnloadedEvent: any;

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    init(treeViewContainerId: string) {
        const treeViewContainer = document.getElementById(treeViewContainerId);

        if (treeViewContainer) {
            this.treeViewPlugin = new TreeViewPlugin(this.viewer, {
                containerElement: treeViewContainer
            });
        }
    }

    setHierarchy(hierarchyType: HierarchyType) {
        if (this.treeViewPlugin) {
            this.treeViewPlugin.hierarchy = hierarchyType;
        }
    }

    destroy() {
        this.viewer.scene.off(this.modelLoadedEvent);
        this.viewer.scene.off(this.modelUnloadedEvent);
        this.treeViewPlugin.destroy();
    }
}
