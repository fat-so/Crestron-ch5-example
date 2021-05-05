export declare class Ch5VideoSubscription {
    static subscriptionValue: string | number | undefined;
    static getNewSignalName(n: Element, attrName: string, attrVal: string, index: number, indexId: string): string | number | undefined;
    static replaceIndexIdInTmplElemsAttrs(documentContainer: HTMLElement, index: number, indexId: string): void;
    static replaceIndexIdInTmplElemsContent(documentContainer: HTMLElement, index: number, indexId: string): void;
}
