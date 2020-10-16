export class Module {
    private _components = new Map();

    constructor(private _metatype) {}

    get components() {
        return this._components;
    }

    get instance() {
        const module = this._components.get(this._metatype.name);

        return module.instance;
    }

    get metatype() {
        return this._metatype;
    }
}
