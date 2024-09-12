import { AppListener } from "./application_listener";

export class ApplicationBinding {
    private static _instance: ApplicationBinding = null;
    private constructor() {}

    static get instance() {
        return this._instance ?? (this._instance = new ApplicationBinding());
    }

    protected listeners: AppListener[] = [];

    attach(listener: AppListener) {
        console.assert(!this.listeners.includes(listener), "Already exists a given listener in this binding.");
        this.listeners.push(listener);
    }

    detach(listener: AppListener) {
        console.assert(this.listeners.includes(listener), "Already not exists a given listener in this binding.");
        this.listeners = this.listeners.filter(l => l != listener);
    }

    rebuild() {
        console.assert(this.listeners.length != 0, "The `Application` component to detect events at top-level components is missing.");
        console.assert(this.listeners.length == 1, "The `Application` component must exist as the only unique entity.");
    }
}

/** This proxy instance for an short alias of the [ApplicationBinding] class. */
export const App = new Proxy(ApplicationBinding, {get: () => ApplicationBinding.instance});