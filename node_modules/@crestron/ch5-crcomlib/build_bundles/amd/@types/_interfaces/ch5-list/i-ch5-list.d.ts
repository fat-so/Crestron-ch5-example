import { ICh5Common } from "../ch5-common";
import { ICh5ListAttributes } from "./i-ch5-list-attributes";
import { TBoolAttribute } from '../ch5-common/types/t-bool-attribute';
import { ICh5Gestureable } from "../ch5-common/i-ch5-gestureable";
export interface ICh5List extends ICh5Gestureable, ICh5ListAttributes, ICh5Common {
    scrollbar: TBoolAttribute;
    pagedSwipe: TBoolAttribute;
    endless: TBoolAttribute;
}
