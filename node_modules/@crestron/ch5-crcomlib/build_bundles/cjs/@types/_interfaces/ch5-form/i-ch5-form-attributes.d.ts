import { ICh5CommonAttributes } from "../ch5-common";
import { TCh5ButtonType } from "../ch5-button/types";
export interface ICh5FormAttributes extends ICh5CommonAttributes {
    submitButtonLabel: string;
    submitButtonIcon: string;
    submitButtonStyle: string;
    submitButtonType: TCh5ButtonType;
    cancelButtonLabel: string;
    cancelButtonIcon: string;
    cancelButtonStyle: string;
    cancelButtonType: TCh5ButtonType;
    submitId: string;
    cancelId: string;
}
