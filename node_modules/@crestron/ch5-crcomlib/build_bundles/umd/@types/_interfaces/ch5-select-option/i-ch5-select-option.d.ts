import { ICh5SelectOptionAttributes } from "./i-ch5-select-option-attributes";
import { ICh5Common } from "../ch5-common";
import { TBoolAttribute } from "../ch5-common/types/t-bool-attribute";
export interface ICh5SelectOption extends ICh5SelectOptionAttributes, ICh5Common {
    useDefaultTmpl: TBoolAttribute;
}
