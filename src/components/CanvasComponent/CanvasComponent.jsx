import {Scene} from "./objects3D/Scene";
import React, {Suspense} from "react";
import {Canvas} from "react-three-fiber";

const CanvasComponent = props => (
    <Canvas
        id="rtfCanvas"
    >
        <Suspense fallback={null}>
            <Scene {...props}/>
        </Suspense>
    </Canvas>
)

export default CanvasComponent;