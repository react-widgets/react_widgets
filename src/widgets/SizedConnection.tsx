import { IntrinsicSize } from "@web-package/utility";
import { createContext, ReactNode, useState } from "react"
import { Box } from "./Box";

export const SizedConnectionContext = createContext<SizedConnectionBinding | null>(null);
export type SizedConnectionListener = (size: IntrinsicSize) => void;
export class SizedConnectionBinding {
    private listeners: SizedConnectionListener[] = [];

    addListener(listener: SizedConnectionListener) {
        console.assert(!this.listeners.includes(listener), "Already exists a given listener in this binding");
        this.listeners.push(listener);
    }

    removeListener(listener: SizedConnectionListener) {
        console.assert(this.listeners.includes(listener), "Already not exists a given listener in this binding");
        this.listeners = this.listeners.filter(l => l != listener);
    }

    notifyListeners(size: IntrinsicSize) {
        console.assert(
            this.listeners.length != 0,
            "Not exists a listener to notify in this `SizedCononectionBinding` instance. Therefore, " +
            "you need to add the 'SizedSlaver' component to the subtree of the 'SizedConnection' component."
        )

        this.listeners.forEach(l => l(size));
    }
}

/**
 * This widget is used to resolve the issue where one element's size change causes another
 * element to undergo reflow, leading to delays in operations such as animations,
 * due to the strong dependency between two elements with high reflow costs.
 * 
 * Used with `SizedMaster` and `SizedSlaver` widgets.
 */
export function SizedConnection({children}: {
    children: ReactNode
}) {
    const [instance, _] = useState(new SizedConnectionBinding());

    return (
        // To communication between the master and the slaver widgets.
        <Box position="relative"><SizedConnectionContext.Provider value={instance} children={children} /></Box>
    )
}