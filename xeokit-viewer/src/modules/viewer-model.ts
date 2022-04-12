import { XKTLoaderPlugin } from "xeokit-sdk/src/plugins/XKTLoaderPlugin";
import { math } from "xeokit-sdk/src/viewer/scene/math";
import { IViewer, IXKTLoaderPluginLoaderConfig } from "../interfaces/xeokit.interface";

export class ModelModule {
    private viewer: IViewer;
    private modelLoader: any;

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    loadModelByUrl(src: string): Promise<void> {
        if (this.viewer && this.viewer.scene.models) {
            this.unloadModel();
        }

        return new Promise((resolve, reject) => {
            this.modelLoader = this.initXktModel(src);

            if (!this.modelLoader) {
                reject(new Error("Cannot load model"));
            }

            if (this.modelLoader) {
                this.modelLoader.on("loaded", () => {
                    resolve();
                });
            }
        });
    }

    getModelData() {
        if (this.viewer.metaScene.metaModels) {
            const metaModels = Object.keys(this.viewer.metaScene.metaModels);
            const metaModel = this.viewer.metaScene.metaModels[metaModels[0]];

            if (metaModel) {
                return metaModel.getJSON().metaObjects;
            }
        }
    }

    private unloadModel() {
        const models = this.viewer.scene.models;

        for (const modelId in models) {
            /* eslint-disable no-prototype-builtins */
            if (models.hasOwnProperty(modelId)) {
                models[modelId].destroy();
            }
        }
    }

    private initXktModel(src: string) {
        const config: IXKTLoaderPluginLoaderConfig = {
            src,
            edges: true,
            sao: true,
            pbr: true,
            objectDefaults: {
                DEFAULT: {
                    visible: false
                }
            }
        };
        const loader = new XKTLoaderPlugin(this.viewer);

        return loader.load(config);
    }
}
