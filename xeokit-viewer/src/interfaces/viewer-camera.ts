export interface CameraPosition {
    eye: number[];
    look: number[];
    up?: number[];
}

export type CameraNavMode = "orbit" | "firstPerson" | "planView";
