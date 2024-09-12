import { AppEvent } from "./application_event";
/** Signature for the type about a short alias of the [ApplicationListener] enumeration. */
export type AppListener = ApplicationListener;
/**
 * Signature for the callback function that is called when
 * an event occurs statically about the application.
 */
export type ApplicationListener<T = AppEvent> = (event: T) => void;
