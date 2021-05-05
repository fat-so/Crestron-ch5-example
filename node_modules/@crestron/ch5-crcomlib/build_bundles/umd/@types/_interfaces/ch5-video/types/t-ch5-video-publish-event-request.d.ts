export interface ICREDENTIALS {
    userid: string;
    password: string;
}
export interface ISOURCE {
    type: string;
    url: string;
}
export interface ILOCATION {
    top: number;
    left: number;
    width: number;
    height: number;
    z: number;
}
export interface IPUBLISHEVENT {
    action: string;
    id: number;
    credentials?: ICREDENTIALS;
    source?: ISOURCE;
    location?: ILOCATION;
    alphablend?: boolean;
    starttime?: number;
    endtime?: number;
    timing?: string;
}
export interface IBACKGROUND {
    action: string;
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
}
