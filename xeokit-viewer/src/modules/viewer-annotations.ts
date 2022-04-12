import { AnnotationsPlugin } from "xeokit-sdk/src/plugins/AnnotationsPlugin";
import { math } from "xeokit-sdk/src/viewer/scene/math";
import { AnnotationItem } from "../interfaces/viewer-annotation";
import { IAnnotationsPlugin, IViewer } from "../interfaces/xeokit.interface";

export class AnnotationsModule {
    private viewer: IViewer;
    private annotationsPlugin: IAnnotationsPlugin;

    constructor(viewer: IViewer) {
        this.viewer = viewer;
        this.annotationsPlugin = new AnnotationsPlugin(this.viewer, {});
    }

    enableMarkerClick() {
        this.annotationsPlugin.on("markerClicked", annotation => {
            annotation.setLabelShown(!annotation.getLabelShown());
        });
    }

    enableMarkerHover() {
        this.annotationsPlugin.on("markerMouseEnter", annotation => {
            annotation.setLabelShown(true);
        });

        this.annotationsPlugin.on("markerMouseLeave", annotation => {
            annotation.setLabelShown(false);
        });
    }

    createAnnotation(annotationItem: AnnotationItem) {
        const object = this.viewer.scene.objects[annotationItem.objectId];

        if (object) {
            const aabb = object.aabb;
            const objectCenter = math.getAABB3Center(aabb);

            if (annotationItem.occludable) {
                // Position the marker on top of the object by positioning the y axis
                // objectCenter[1] = objectCenter[1] + (aabb[4] - aabb[1])
            }

            return this.annotationsPlugin.createAnnotation({
                markerElementId: annotationItem.markerId,
                labelElementId: annotationItem.labelId,
                entity: object,
                worldPos: objectCenter,
                occludable: false
            });
        }
    }
}
