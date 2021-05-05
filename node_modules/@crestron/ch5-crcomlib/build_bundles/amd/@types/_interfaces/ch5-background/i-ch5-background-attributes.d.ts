import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5BackgroundScale, TCh5BackgroundRepeat } from './types';
export interface ICh5BackgroundAttributes extends ICh5CommonAttributes {
    url: string;
    backgroundColor: string;
    repeat: TCh5BackgroundRepeat;
    scale: TCh5BackgroundScale;
    refreshRate: number | string;
    imgBackgroundColor: string;
    transitionEffect: string;
    transitionDuration: string;
    receiveStateRefreshRate: string;
    receiveStateUrl: string;
    receiveStateBackgroundColor: string;
}
