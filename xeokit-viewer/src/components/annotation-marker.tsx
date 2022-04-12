import { createElement } from "react";

interface Props {
    id: string;
    children?: any;
}

export const AnnotationMarker = ({ id, children }: Props) => {
    return <div id={id}>{children}</div>;
};
