import React, { createElement } from "react";
import { HierarchyType } from "..";
import { TreeViewModule } from "../modules/viewer-treeview";

interface Props {
    className: string;
    treeViewId: string;
    hierarchyType?: HierarchyType;
    treeViewModule: TreeViewModule;
}

export const XeokitTreeView = ({ className, treeViewId, treeViewModule, hierarchyType = "containment" }: Props) => {
    const initTreeView = () => {
        if (treeViewModule) {
            treeViewModule.init(treeViewId);
            treeViewModule.setHierarchy(hierarchyType);
        }
    };

    React.useEffect(() => {
        initTreeView();
    }, []);

    return <div id={treeViewId} className={className} />;
};
