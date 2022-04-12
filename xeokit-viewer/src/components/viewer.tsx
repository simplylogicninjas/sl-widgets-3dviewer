import React, { createElement } from "react";
import XeokitViewerModule from "../modules/viewer";

interface Props {
    name: string;
}

export interface XeokitViewerRef {
    initViewer: () => XeokitViewerModule;
}

export const XeokitViewer = React.forwardRef(
    ({ name }: Props, ref: React.MutableRefObject<XeokitViewerRef | undefined | null>) => {
        const initViewer = () => {
            return new XeokitViewerModule(name);
        };

        React.useImperativeHandle(ref, () => ({
            initViewer
        }));

        return (
            <div className={"viewer-canvas-container"} id={`${name}-container`}>
                <canvas id={name} />
            </div>
        );
    }
);
