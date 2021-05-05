export declare type TSchemas = {
    http: string;
    https?: string;
};
export declare class Ch5ImageUriModel {
    protected _schemas: TSchemas;
    protected _user: string;
    protected _password: string;
    protected _location: string;
    protected _protocol: string;
    constructor(schemas: TSchemas, user: string, password: string, location: string);
    schemas: TSchemas;
    user: string;
    password: string;
    location: string;
    toString(): string;
    isValidAuthenticationUri(): boolean;
    private getProtocol(location);
}
