export declare type TState = {
    url: string;
    type: string;
    user: string;
    videoPass: string;
    snapShotUrl: string;
    snapShotRefreshRate: string;
    snapShotUser: string;
    snapShotPass: string;
};
export declare type TSnapShotSignalName = {
    index: number;
    snapShotUrl: string;
    snapShotRefreshRate: string;
    snapShotUser: string;
    snapShotPass: string;
};
export declare type TReceiveState = {
    subscriptionIds: TState;
    values: TState;
};
