export declare class headers {
    private headers;
    constructor(headers?: string | {
        [name: string]: string | string[];
    });
    has(): void;
    get(name: string): string | null;
    set(name: string, value: string | string[] | number | boolean): void;
    keys(): void;
    append(name: string, value: string | string[]): void;
    delete(name: string, value: string | string[] | number | boolean): void;
}
