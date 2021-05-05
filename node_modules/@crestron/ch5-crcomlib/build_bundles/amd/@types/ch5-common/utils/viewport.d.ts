export interface IViewportDetails {
    width: number;
    height: number;
    heightCollapsedControls: number;
    scrollX: number;
    scrollY: number;
    resized: boolean;
    scrolled: boolean;
}
export declare function GetViewportDetails(): IViewportDetails;
export declare function getAspectRatio(ratioWidth: number, ratioHeight: number, viewPortSize: number): {
    width: number;
    height: number;
};
