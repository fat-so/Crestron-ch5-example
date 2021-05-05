export declare class OrientationHelper {
    private width;
    private height;
    constructor(width: number, height: number);
    hasOrientationChanged(): boolean;
    private isPortrait(width, height);
}
