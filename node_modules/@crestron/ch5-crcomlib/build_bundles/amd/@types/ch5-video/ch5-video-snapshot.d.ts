import { TSnapShotSignalName } from "../_interfaces/ch5-video/types";
export declare class Ch5VideoSnapshot {
    isSnapShotLoading: boolean;
    snapShotImage: any;
    private protocol;
    private videoSnapShotUrl;
    private videoSnapShotUser;
    private videoSnapShotPass;
    private videoSnapShotRefreshRate;
    private url;
    private userId;
    private password;
    private refreshRate;
    private snapShotTimer;
    private snapShotObj;
    constructor(snapShotObj: TSnapShotSignalName);
    startLoadingSnapShot(): void;
    stopLoadingSnapShot(): void;
    processUri(): void;
    private setSnapShot();
    private unSubscribeStates();
    private setSnapShotData();
    private setSnapshotUrl(signalName);
    private setSnapshotUserId(signalName);
    private setSnapshotPassword(signalName);
    private setSnapshotRefreshRate(signalName);
}
