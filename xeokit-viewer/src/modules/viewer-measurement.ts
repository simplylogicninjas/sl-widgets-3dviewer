import { DistanceMeasurementsPlugin } from "xeokit-sdk/src/plugins/DistanceMeasurementsPlugin";
import { AngleMeasurementsPlugin } from "xeokit-sdk/src/plugins/AngleMeasurementsPlugin";
import { IMeasurePlugin, IViewer } from "../interfaces/xeokit.interface";

type MeasurementType = "distance" | "angle" | "off";

export class MeasurementModule {
    private viewer: IViewer;
    private viewerName: string;
    private angleMeasurementPlugin: IMeasurePlugin | undefined;
    private distanceMeasurementPlugin: IMeasurePlugin | undefined;

    private modelLoadedEvent: any;
    private modelUnloadedEvent: any;

    constructor(viewer: IViewer, viewerName: string) {
        this.viewer = viewer;
        this.viewerName = viewerName;

        this.modelUnloadedEvent = this.viewer.scene.on("modelUnloaded", () => {
            this.clearPlugins();
        });
    }

    enable(measurementType: MeasurementType) {
        if (!measurementType) {
            return;
        }

        if (measurementType === "off") {
            this.destroyPlugins();
        } else {
            /* eslint-disable no-unused-expressions */
            measurementType === "angle" ? this.enableAnglePlugin() : this.enableDistancePlugin();
        }
    }

    destroy() {
        this.viewer.scene.off(this.modelLoadedEvent);
        this.viewer.scene.off(this.modelUnloadedEvent);
    }

    clearPlugins() {
        if (this.angleMeasurementPlugin) {
            this.angleMeasurementPlugin.clear();
        }

        if (this.distanceMeasurementPlugin) {
            this.distanceMeasurementPlugin.clear();
        }
    }

    private destroyPlugins() {
        this.clearPlugins();
        this.destroyAnglePlugin();
        this.destroyDistancePlugin();
    }

    private enableDistancePlugin() {
        this.destroyAnglePlugin();
        this.createDistancePlugin(this.viewer);
    }

    private enableAnglePlugin() {
        this.destroyDistancePlugin();
        this.createAnglePlugin(this.viewer);
    }

    private destroyAnglePlugin() {
        if (this.angleMeasurementPlugin) {
            this.angleMeasurementPlugin.control.deactivate();
            this.angleMeasurementPlugin.destroy();
            this.angleMeasurementPlugin = undefined;
        }
    }

    private destroyDistancePlugin() {
        if (this.distanceMeasurementPlugin) {
            this.distanceMeasurementPlugin.control.deactivate();
            this.distanceMeasurementPlugin.destroy();
            this.distanceMeasurementPlugin = undefined;
        }
    }

    private createDistancePlugin(viewer: IViewer) {
        this.distanceMeasurementPlugin = new DistanceMeasurementsPlugin(viewer, {
            // container: document.getElementById(`${this.viewerName}-container`)
        });

        if (this.distanceMeasurementPlugin) {
            this.distanceMeasurementPlugin.control.activate();
        }
    }

    private createAnglePlugin(viewer: IViewer) {
        this.angleMeasurementPlugin = new AngleMeasurementsPlugin(viewer, {
            // container: document.getElementById(`${this.viewerName}-container`)
        });

        if (this.angleMeasurementPlugin) {
            this.angleMeasurementPlugin.control.activate();
        }
    }
}
