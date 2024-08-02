import { ReactNode, useLayoutEffect, useState } from "react";

/** Signature for a factory function of a react-node about display size. */
export type SizedBuilder = (width: number, height: number) => ReactNode;

export namespace SizeBuilder {
    /**
     * Signature for the object that is defining required properties
     * in about `SizeBuilder` foundation.
     */
    export type Properties = {builder: SizedBuilder};

    /**
     * Based on and measuring browser viewport of the user.
     * 
     * See Also, this widget is not an issue for building a flexible responsive UI unless
     * it is a specific situation.
     */
    export function Viewport({builder}: Properties) {
        // Returns current window inner relative display size object,
        // i.e. this value not the display size.
        const getSize = () => {
            return { width: window.innerWidth, height: window.innerHeight };
        }

        const [size, setSize] = useState(getSize());

        // Called when the window display size changes.
        useLayoutEffect(() => {
            const handleResize = () => setSize(getSize());
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);

        return <>{builder(size.width, size.height)}</>;
    }

    // TODO: Need to develop a SizeBuilder that returns the size of the parent widget.
    export function Parent({builder}: Properties) {
        
    }
}