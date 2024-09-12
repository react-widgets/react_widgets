import { AppListener } from "./application_listener";
export declare class ApplicationBinding {
    private static _instance;
    private constructor();
    static get instance(): ApplicationBinding;
    protected listeners: AppListener[];
    attach(listener: AppListener): void;
    detach(listener: AppListener): void;
    rebuild(): void;
}
/** This proxy instance for an short alias of the [ApplicationBinding] class. */
export declare const App: typeof ApplicationBinding;
