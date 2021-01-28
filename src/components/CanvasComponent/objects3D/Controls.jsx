import React, {useState, useEffect} from "react";
import { useThree } from "react-three-fiber";
import { OrbitControls } from '@react-three/drei/OrbitControls'

export const camContext = React.createContext()

export default function Controls({ children }) {
    const { gl, camera, scene } = useThree()
    useEffect(() => {
        camera.position.z = 300;


        console.log(scene);
    }, [])
    const api = useState(true)
    return (
        <>
            <OrbitControls
                args={[camera, gl.domElement]}
                enableDamping
                enabled={api[0]}
                enablePan={false}
            />
            <camContext.Provider value={api}>{children}</camContext.Provider>
        </>
    );
}
