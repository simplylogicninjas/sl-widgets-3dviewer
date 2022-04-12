import React, { createElement } from "react";
import { AnnotationsModule } from "../modules/viewer-annotations";
import { AnnotationLabel } from "./annotation-label";
import { AnnotationMarker } from "./annotation-marker";

interface Props {
    labelId: string;
    markerId: string;
    objectId: string;
    occludable?: boolean;
    annotationsModule: AnnotationsModule;
    renderLabel: () => JSX.Element;
    renderMarker: () => JSX.Element;
}

export const XeokitAnnotation = ({
    renderLabel,
    labelId,
    renderMarker,
    markerId,
    objectId,
    annotationsModule,
    occludable = false
}: Props) => {
    const [annotation, setAnnotation] = React.useState<any>();

    const createAnnotation = () => {
        const newAnnotation = annotationsModule.createAnnotation({
            labelId,
            markerId,
            objectId,
            occludable
        });

        if (newAnnotation) {
            setAnnotation(newAnnotation);
        }
    };

    const destroyAnnotation = () => {
        if (annotation) {
            annotation.destroy();
        }
    };

    React.useEffect(() => {
        createAnnotation();

        return () => {
            destroyAnnotation();
        };
    }, []);

    return (
        <React.Fragment>
            <AnnotationLabel id={labelId}>{renderLabel()}</AnnotationLabel>
            <AnnotationMarker id={markerId}>{renderMarker()}</AnnotationMarker>
        </React.Fragment>
    );
};
