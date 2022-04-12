import { ViewerInteraction, ViewerInteractions } from "../interfaces/viewer-interaction.interface";
import { IViewer } from "../interfaces/xeokit.interface";
import { findEntity } from "../utils/findEntity";

type ViewerInteractionConfig = {
    xray: boolean;
    highlight: boolean;
    coordinates: any;
};

type DatasourceList = {
    highlight: string[];
    xray: string[];
};

export class InteractionsModule {
    viewer: IViewer;
    interactions: ViewerInteractions;
    entities = {
        lastHighlighted: null,
        highlightedList: {},
        lastXrayed: null,
        xrayedList: {}
    };

    datasourceList: DatasourceList = {
        highlight: [],
        xray: []
    };

    constructor(viewer: IViewer) {
        this.viewer = viewer;
    }

    destroy() {
        this.viewer.scene.input.off("mousemove");
        this.viewer.scene.input.off("mouseclicked");
        this.entities = {
            lastHighlighted: null,
            highlightedList: {},
            lastXrayed: null,
            xrayedList: {}
        };
    }

    setHighlightInteraction(interaction: ViewerInteraction) {
        if (!this.interactions) {
            this.interactions = {};
            this.enable();
        }

        this.interactions.highlight = { ...interaction };
    }

    setXrayInteraction(interaction: ViewerInteraction) {
        if (!this.interactions) {
            this.interactions = {};
            this.enable();
        }

        this.interactions.xray = { ...interaction };
    }

    updateHighlightDatasource(datasource: string[]) {
        this.datasourceList.highlight = datasource;
    }

    updateXrayDatasource(datasource: string[]) {
        this.datasourceList.xray = datasource;
    }

    private enable() {
        this.viewer.scene.input.on("mousemove", (coordinates: any) => this.onMouseMove(coordinates));
        this.viewer.scene.input.on("mouseclicked", (coordinates: any) => this.onMouseClicked(coordinates));
    }

    private highlightHoverEntity(entity: any) {
        const { lastHighlighted, highlightedList } = this.entities as any;
        if (entity) {
            if (!lastHighlighted || entity.id !== lastHighlighted.id) {
                const datasourceItem = this.datasourceList.highlight.find(it => it === lastHighlighted.id);

                if (lastHighlighted && !datasourceItem && !highlightedList[lastHighlighted.id]) {
                    lastHighlighted.highlighted = false;
                }

                if (!highlightedList[entity.id]) {
                    entity.highlighted = true;
                    this.entities.lastHighlighted = entity;
                }
            }
        } else {
            const datasourceItem = this.datasourceList.highlight.find(it => it === lastHighlighted.id);
            if (lastHighlighted && !datasourceItem && !highlightedList[lastHighlighted.id]) {
                lastHighlighted.highlighted = false;
                this.entities.lastHighlighted = null;
            }
        }
    }

    private xrayHoverEntity(entity: any) {
        const { lastXrayed, xrayedList } = this.entities as any;

        if (entity) {
            if (!lastXrayed || entity.id !== lastXrayed.id) {
                if (lastXrayed && !xrayedList[lastXrayed.id]) {
                    lastXrayed.xrayed = false;
                }

                if (!xrayedList[entity.id]) {
                    entity.xrayed = true;
                    this.entities.lastXrayed = entity;
                }
            }
        } else {
            const datasourceItem = this.datasourceList.xray.find(it => it === lastXrayed.id);
            if (lastXrayed && !datasourceItem && !xrayedList[lastXrayed.id]) {
                lastXrayed.xrayed = false;
                this.entities.lastXrayed = null;
            }
        }
    }

    private highlightClickEntity(entity: any) {
        if (entity) {
            const entityHiglighted = this.entities.highlightedList[entity.id];

            if (entityHiglighted) {
                entity.highlighted = false;
                delete this.entities.highlightedList[entity.id];
            } else {
                entity.highlighted = true;
                this.entities.highlightedList[entity.id] = entity;
            }
        }
    }

    private xrayClickEntity(entity: any) {
        if (entity) {
            const entityXrayed = this.entities.xrayedList[entity.id];

            if (entityXrayed) {
                entity.xrayed = false;
                delete this.entities.xrayedList[entity.id];
            } else {
                entity.xrayed = true;
                this.entities.xrayedList[entity.id] = entity;
            }
        }
    }

    private onHover(interaction: ViewerInteractionConfig) {
        const { xray, highlight, coordinates } = interaction;

        if (xray) {
            this.xrayHoverEntity(findEntity(this.viewer, coordinates));
        }

        if (highlight) {
            this.highlightHoverEntity(findEntity(this.viewer, coordinates));
        }
    }

    private onClick(interaction: ViewerInteractionConfig) {
        const { xray, highlight, coordinates } = interaction;

        if (xray) {
            this.xrayClickEntity(findEntity(this.viewer, coordinates));
        }

        if (highlight) {
            this.highlightClickEntity(findEntity(this.viewer, coordinates));
        }
    }

    private onMouseMove(coordinates: any) {
        const { highlight, xray } = this.interactions;

        this.onHover({
            coordinates,
            highlight: highlight ? highlight.onHover : false,
            xray: xray ? xray.onHover : false
        });
    }

    private onMouseClicked(coordinates: any) {
        const { highlight, xray } = this.interactions;

        this.onClick({
            coordinates,
            xray: xray ? xray.onClick : false,
            highlight: highlight ? highlight.onClick : false
        });
    }
}
