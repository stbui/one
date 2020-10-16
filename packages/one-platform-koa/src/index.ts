import koa from 'koa';

export class KoaAdapter {
    private static app = new koa();

    public static create(): any {
        return this.app;
    }

    public static createRouter(): any {
        return this.app;
    }
}
