import { ICh5CommonAttributes } from "./i-ch5-common-attributes";
import { TBoolAttribute } from "./types/t-bool-attribute";
export interface ICh5Common extends ICh5CommonAttributes {
    class: string;
    style: string;
    role: string;
    debug: TBoolAttribute;
    disabled: TBoolAttribute;
}
