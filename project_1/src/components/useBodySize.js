import { useEffect, useState } from "react";

export default function useBodySize() {
    const [size, setSize] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        const updateSize = () => {
            setSize({ width: document.body.clientWidth, height: document.body.clientHeight });
        };
        updateSize(); // set initial width
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
}