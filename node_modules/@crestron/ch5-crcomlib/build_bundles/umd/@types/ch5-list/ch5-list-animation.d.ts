import { Ch5List } from "./ch5-list";
import { Ch5ListAbstractHelper } from "./ch5-list-abstract-helper";
import { TCh5ListElementOrientation } from "../_interfaces/ch5-list/types";
import { Ch5Animation, TAnimationCallback } from "./animation/ch5-animation";
export declare const defaultTransitionDuration = 0;
export declare type TAnimateCallback = (element: HTMLElement, currentPosition: number, mode: TCh5ListElementOrientation, previousPosition?: number, callback?: TAnimationCallback) => void;
export declare enum EDragDirection {
    next = 1,
    previous = 0,
}
export declare class Ch5ListAnimation extends Ch5ListAbstractHelper {
    disableAnimation: boolean;
    animationAPI: Ch5Animation;
    animationFrame: number;
    maxOffsetTranslate: number | undefined;
    minOffsetTranslate: number;
    direction: number;
    constructor(list: Ch5List, animationApi?: Ch5Animation);
    stop(): void;
    onFinishAnimation(): void;
    addAnimationApi(api: Ch5Animation): boolean;
    startDecelerating(): void;
    listDeceleration(): void;
    fixOffset(coord: number): number;
    signalScrollTo(position: number): void;
    slideTo(coord: number): void;
    resolveDirection(last: number, current: number): number;
    updateDragPosition(newPosition: number, animate?: TAnimateCallback): void;
    adjustMaxOffset(isBuffered?: boolean): number;
    resetOffsets(): void;
    private _infiniteLoopManager(newPosition);
    private stackInfinite();
    private queueInfinite();
    private _calculateNextPosition();
    private _loop(currentItemToMove, arrangementFn);
    private _arrangementCondition(newPosition);
    private _computeNewPosition(newPosition);
    private _log(newPosition);
}
