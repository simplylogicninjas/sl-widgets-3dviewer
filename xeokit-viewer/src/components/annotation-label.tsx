import { createElement } from "react";

interface Props {
    id: string;
    children?: any;
}

export const AnnotationLabel = ({ id, children }: Props) => {
    return <div id={id}>{children}</div>;
};
