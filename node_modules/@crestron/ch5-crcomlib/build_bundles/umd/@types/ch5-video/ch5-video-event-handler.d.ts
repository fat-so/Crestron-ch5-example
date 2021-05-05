import { Observable } from 'rxjs';
export declare enum EVideoWindowEvents {
    RESIZE_EVENT = "resize",
    ORIENTATIONCHANGE_EVENT = "orientationchange",
    SCROLL_EVENT = "scroll",
    TOUCH_MOVE_EVENT = "touchmove",
    TOUCH_END_EVENT = "touchend",
}
export declare enum EWindowOrientation {
    PORTRAIT_ORIENTATION = "portrait",
    LANDSCAPE_ORIENTATION = "landscape",
}
export declare enum ESVGIcons {
    PLAY_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svgIconStyle\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>",
    STOP_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svgIconStyle\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 6h12v12H6z\"/></svg>",
    EXIT_FULLSCREEN_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svgIconStyle\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z\"/></svg>",
    FULLSCREEN_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svgIconStyle\" class=\"svgIconStyle\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"/></svg>",
    SCREEN_PLAY_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>",
    SCREEN_STOP_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 6h12v12H6z\"/></svg>",
}
export declare class Ch5VideoEventHandler {
    static eventList: Observable<Event>;
    static attachWindowEvents(): Observable<Event>;
    static isPortrait(): boolean;
    static isLandscape(): boolean;
}
