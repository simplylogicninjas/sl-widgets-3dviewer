export interface ViewerInteraction {
    onHover: boolean;
    onClick: boolean;
}

export interface ViewerInteractions {
    highlight?: ViewerInteraction;
    xray?: ViewerInteraction;
}
