import { useEffect } from "react";

export default function useOnClickOutside(ref, handler, isActive) {
    useEffect(() => {
        if (!isActive) return;
        const listener = (event) => {

            // If click is inside ref element, do nothing
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event); // Otherwise, call the handler
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}