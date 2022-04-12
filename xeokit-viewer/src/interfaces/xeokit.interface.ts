export interface IViewerConfig {
    canvasId: string;
    camera: ICamera;
}

export interface IViewer {
    id: string;
    camera: ICamera;
    cameraControl: ICameraControl;
    cameraFlight: any;
    language: string;
    localeService: any;
    metaScene: IMetaScene;
    scene: any;
    destroy: () => void;
}

export interface IScene {
    input: any;
}

export interface IMetaScene {
    metaModels: { [modelId: string]: any };
    metaObjects: { [objectId: string]: any };
}

export interface ICamera {
    eye: number[];
    look: number[];
    up: number[];
    projection: 'perspective' | 'ortho' | 'frustum';
    perspective: {
        far: number;
        near: number;
        fov: number;
    };
    zoom: (delta: number) => void;
    pan: (pan: number[]) => void;
}

export interface ICameraControlEvent {
    entity: any;
}

export interface ICameraControl {
    navMode: string;
    followPointer: boolean;
    dollyProximityThreshold: number;
    dollyMinSpeed: number;
    mouseWheelDollyRate: number;
    smartPivot: boolean;
    on: (eventName: string, event: (event: ICameraControlEvent) => void) => void;
    off: (eventName: string) => void;
}

export interface IXKTLoaderPluginLoaderConfig {
    src: string;
    xkt?: ArrayBuffer;
    edges?: boolean;
    sao?: boolean;
    pbr?: boolean;
    excludeUnclassifiedObjects?: boolean;
    objectDefaults: { [key: string]: any };
}

export interface IXKTLoaderPlugin {
    load: (params: IXKTLoaderPluginLoaderConfig) => any;
    on: (eventName: string, event: (event: any) => void) => void;
    off: (eventName: string) => void;
}

export interface IAnnotationsPlugin {
    createAnnotation: (config: any) => any;
    destroyAnnotation: (id: string) => void;
    on: (eventName: string, event: (event: any) => void) => void;
    off: (eventName: string) => void;
    destroy: () => void;
    clear: () => void;
}

export interface IEntity {
    id: number | string;
    isEntity: boolean;
    isModel: boolean;
}

export interface IMeasurePlugin {
    measurements: { [key: string]: any };
    destroyMeasurement: (id: string) => void;
    control: {
        activate: () => void;
        deactivate: () => void;
        reset: () => void;
    };
    clear: () => void;
    destroy: () => void;
}
