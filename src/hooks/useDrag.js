import React, {  useRef, useEffect, useState, useCallback, useContext } from 'react'
import {camContext} from "../components/CanvasComponent/objects3D/Controls";


export function useDrag(onDrag, onStart, onEnd) {
    const active = useRef(false);
    const [, toggle] = useContext(camContext);
    const [bind] = useState(() => ({
        onPointerDown: event => {
            event.stopPropagation();
            event.target.setPointerCapture(event.pointerId);
            active.current = true;
            // We don't want the camera to move while we're dragging, toggle it off
            toggle(false);
            if (onStart) onStart();
        },
        onPointerUp: event => {
            event.stopPropagation();
            event.target.releasePointerCapture(event.pointerId);
            active.current = false;
            // Drag has concluded, toggle the controls on again
            toggle(true);
            if (onEnd) onEnd();
        },
        onPointerMove: event => {
            if (active.current) {
                event.stopPropagation();
                onDrag(event.point);
            }
        }
    }));
    return bind;
}