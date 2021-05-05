import { ICh5Common } from "../ch5-common";
import { ICh5VideoAttributes } from "./i-ch5-video-attributes";
export interface ICh5Video extends ICh5VideoAttributes, ICh5Common {
    onpress: string;
    onrelease: string;
}
